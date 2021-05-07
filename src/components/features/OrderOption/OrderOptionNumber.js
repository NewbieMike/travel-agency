import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionNumber = ({limits, price, currentValue, setOptionValue}) => (
  < div className={styles.number}>
    <input type="number" className={styles.inputSmall} value={currentValue} min={limits.min}
      max={limits.max} onChange={event => setOptionValue(event.currentTarget.value)}
    />
    {`${formatPrice(price)}`}
  </ div>
);

OrderOptionNumber.propTypes = {
  price: PropTypes.node,
  limits: PropTypes.object,
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
};
export default OrderOptionNumber;