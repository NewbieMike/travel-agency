import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';
//import OrderSummary from '../OrderSummary/OrderSummary';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';

const OrderSummary = ({cost, options}) => (

  <h2 className={styles.component}>
    <strong>{formatPrice(calculateTotal(cost, options))}</strong>
  </h2>
);

OrderSummary.propTypes = {
  cost: PropTypes.node,
  options: PropTypes.any,
};

export default OrderSummary;