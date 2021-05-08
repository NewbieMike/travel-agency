import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
//import { setOrderOption } from '../../../redux/orderRedux';

// eslint-disable-next-line react/prop-types
const OrderForm = ({tripCost, options, setOrderOption}) => (

  <Row>
    {pricing.map(option => (
      <Col key={option.id} md={4}>
        <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption}/>
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary cost={tripCost} options={options}/>
    </Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.node,

};

export default OrderForm;