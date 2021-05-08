import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const OrderOptionDate = ({setOptionValue, currentValue}) => (
  <div className={styles.component}>
    <DatePicker 
      value={currentValue}
      selected={currentValue}
      onChange={setOptionValue}
      className={styles.input}
      required
    />
  </div >
);

OrderOptionDate.propTypes = {
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
};
export default OrderOptionDate;