import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import OrderOptionDropdown from '../OrderOption/OrderOptionDropdown';
import OrderOptionIcons from '../OrderOption/OrderOptionIcons';
import OrderOptionNumber from '../OrderOption/OrderOptionNumber';
import OrderOptionCheckboxes from '../OrderOption/OrderOptionCheckboxes';
//import OrderForm from '../OrderForm';

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
};

const OrderOption = ({name, type, setOrderOption, id,...otherProps}) => {
  const OptionComponent = optionTypes[type];
  if(!OptionComponent){
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent
          {...otherProps} setOptionValue = {value => setOrderOption({ [id]: value})}
        />
      </div>
    );
  }
};

OrderOption.propTypes = {
  name: PropTypes.string,
  setOptionValue: PropTypes.node,
  id: PropTypes.string,
};
export default OrderOption;