import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionDate = () => (
  <div className={styles.component}>

  </div >
);

OrderOptionDate.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
  value: PropTypes.string,
};
export default OrderOptionDate;