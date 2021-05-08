import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionText = () => (
  <div className={styles.component}>

  </div >
);

OrderOptionText.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
  value: PropTypes.string,
};
export default OrderOptionText;