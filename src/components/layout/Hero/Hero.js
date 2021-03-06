import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import HappyHourAd from '../../features/HappyHourAd/HappyHourAd';
import DaysToSummer from '../../features/DaysToSummer/DaysToSummer';

const Hero = ({variant = '', titleText, imageSrc, ...otherProps}) => (
  <div {...otherProps} className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}>
    <div className={styles.happyHour}><DaysToSummer /></div>
    <h2 className={styles.title}>{titleText}</h2>
    <img className={styles.image}  src={imageSrc} />
    
    <div className={styles.happyHour}><HappyHourAd title={'Happy Hour from 12:00 to 13:00!'} promoDescription={'Get 20% discount, now!'}/></div>
  </div>
);

Hero.propTypes = {
  variant: PropTypes.string,
  titleText: PropTypes.node.isRequired,
  imageSrc: PropTypes.string,
};

export default Hero;