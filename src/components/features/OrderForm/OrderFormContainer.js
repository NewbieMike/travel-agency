import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import {getOrderOptions, setOrderOption} from '../../../redux/orderRedux';

const mapStateToProps = (state) => ({
  options: getOrderOptions(state),
});

const mapDispatchToProps = (dispath) => ({
  setOrderOption: payload => dispath(setOrderOption(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);