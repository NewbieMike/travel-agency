import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';


const OrderOptionText = ({setOptionValue, currentValue}) => (
  <div className={styles.component}>
    <input 
      type="text" 
      value={currentValue}
      onChange={e => setOptionValue(e.currentTarget.value)}
      className={styles.input}
      required
    />
  </div>
);

OrderOptionText.propTypes = {
  values: PropTypes.func,
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
};
export default OrderOptionText;