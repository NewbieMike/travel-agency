import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';

const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => (
  <div className={styles.component}>
    {required ? '' : (
      <div className={styles.icon} onClick={() => setOptionValue('')} value="">
        <Icon name={'times-circle'} /> none
      </div>
    )}
    {values.map((value) => {
      const styleIconValue = styles.icon && currentValue === value.id;
      return (
        <div className={styleIconValue ? styles.iconActive : ''}
          key={value.id}
          onClick={() => setOptionValue(value.id)}>

          <Icon name={value.icon} />
          {value.name}({formatPrice(value.price)})
        </div>
      );
    }
    )}

  </div >
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
  value: PropTypes.string,
};
export default OrderOptionIcons;