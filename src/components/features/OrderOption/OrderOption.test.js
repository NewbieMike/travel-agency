import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';
import DatePicker from 'react-datepicker';

describe('Component OrderOption', () => {
  const expectedType = 'value';
  const expectedName = 'name';

  
  it('should render without crashing', () => {
    const component = shallow(<OrderOption type={expectedType}  name={expectedName}/>);
    console.log(component.debug());
    expect(component).toBeTruthy();
  });
  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });
  
  it('should render correct component title', () => {
    const expectedName = 'name';
    const expectedType = 'text';
    const component = shallow(<OrderOption type={expectedType} name={expectedName}  />);
    expect(component.find('.title').text()).toEqual(expectedName);
  });    

  const optionTypes = {
    dropdown: 'OrderOptionDropdown',
    icons: 'OrderOptionIcons',
    checkboxes: 'OrderOptionCheckboxes',
    number: 'OrderOptionNumber',
    text: 'OrderOptionText',
    date: 'OrderOptionDate',
  };
  const mockProps = {
    id: 'abc',
    name: 'Lorem',
    values: [
      {id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0},
      {id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100},
    ],
    required: false,
    currentValue: 'aaa',
    price: '50%',
    limits: {
      min: 0,
      max: 6,
    },
  };
  
  const mockPropsForType = {
    dropdown: {},
    icons: {},
    checkboxes: {currentValue: [mockProps.currentValue]},
    number: {currentValue: 1},
    text: {},
    date: {},
  };
  
  const testValue = mockProps.values[1].id;
  const testValueNumber = 3;

  for(let type in optionTypes){
    describe(`Component OrderOption with type=${type}`, () => {
      /* test setup */
      let component;
      let subcomponent;
      let renderedSubcomponent;
      let mockSetOrderOption;
      beforeEach(() => {
        mockSetOrderOption = jest.fn();
        component = shallow(
          <OrderOption
            type={type}
            setOrderOption={mockSetOrderOption}
            {...mockProps}
            {...mockPropsForType[type]}
          />
        );
        subcomponent = component.find(optionTypes[type]);
        renderedSubcomponent = subcomponent.dive();
      });
      
      /* common tests */
      it(`renders ${optionTypes[type]}`, () => {
        //expect(subcomponent).toBeTruthy();
        //expect(subcomponent.length).toBe(1);
      });
      
  
      /* type-specific tests */
      switch (type) {
        case 'dropdown': {
          /* tests for dropdown */
          it('contains select and options', () => {
            const select = renderedSubcomponent.find('select');
            expect(select.length).toBe(1);
          
            const emptyOption = select.find('option[value=""]').length;
            expect(emptyOption).toBe(1);
          
            const options = select.find('option').not('[value=""]');
            expect(options.length).toBe(mockProps.values.length);
            expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
            expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
          });
          it('should run setOrderOption function on change', () => {
            renderedSubcomponent.find('select').simulate('change', {currentTarget: {value: testValue}});
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
          });
          break;
        }
        case 'icons': {
          /* tests for icons */
          it('contains icon and component', () => {
            const component = renderedSubcomponent.find('div');
            expect(component.length).toBe(4);

            const timesIcon = component.find('Icon').find('Icon [name="times-circle"]').length;
            expect(timesIcon).toBe(0);

            const options = component.find('Icon').not('[name="times-circle"]');
            expect(options.length).toBe(mockProps.values.length);
            expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
            expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
          });
          it('should run setOrderOption function on click', () => {
            renderedSubcomponent.find('div .icon').last().simulate('click');
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
          });
          break;
        }
        case 'checkboxes': {
          /* tests for checkboxes */
          it('contains div and input', () => {
            const div = renderedSubcomponent.find('div');
            expect(div.length).toBe(1);
            const inputs = div.find('input');
            expect(inputs.length).toBe(mockProps.values.length);
            expect(inputs.at(0).prop('type')).toBe('checkbox');
            expect(inputs.at(1).prop('type')).toBe('checkbox');
            expect(inputs.at(0).prop('value')).toBe(mockProps.values[0].id);
            expect(inputs.at(1).prop('value')).toBe(mockProps.values[1].id);
          });
          it('should run setOrderOption function on change', () => {
            renderedSubcomponent.find(`input[value='${testValue}']`).simulate('change', {currentTarget: {checked: true}});
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: [mockProps.currentValue, testValue] });
          });
          break;
        }
        case 'number' : {
          /* tests for number */
          it('contains div and input', () => {
            const div = renderedSubcomponent.find('div');
            expect(div.length).toBe(1);
  
            const inputs = div.find('input');
            expect(inputs.length).toBe(1);
            expect(inputs.at(0).prop('type')).toBe('number');
            expect(inputs.at(0).prop('value')).toBe(mockPropsForType.number.currentValue);
            expect(inputs.at(0).prop('min')).toBe(mockProps.limits.min);
            expect(inputs.at(0).prop('max')).toBe(mockProps.limits.max);
          });
  
          it('should run setOrderOption function on change', () => {
            renderedSubcomponent.find('input').simulate('change', {currentTarget: {value: testValueNumber}});
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValueNumber });
          });
          break;
        }
        case 'text' : {
          /* tests for number */
          it('contains div and input', () => {
            const div = renderedSubcomponent.find('div');
            expect(div.length).toBe(1);
  
            const inputs = div.find('input');
            expect(inputs.length).toBe(1);
            expect(inputs.at(0).prop('type')).toBe('text');
          });
  
          it('should run setOrderOption function on change', () => {
            renderedSubcomponent.find('input').simulate('change', {currentTarget: {value: testValue}});
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
          });
          break;
        }
        case 'date' : {
          /* tests for date */
          it('contains DatePicker', () => {
            const datePicker = renderedSubcomponent.find(DatePicker);
            expect(datePicker.length).toBe(1);
          });
  
          it('should run setOrderOption function on change', () => {
            renderedSubcomponent.find(DatePicker).simulate('change', testValue);
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue});
          });
          break;
        }
      }
    });
  }

});