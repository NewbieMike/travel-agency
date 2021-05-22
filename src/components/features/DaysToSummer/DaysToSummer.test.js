import React from 'react';
import { shallow } from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  component: '.component',
};

describe('Component HappyHourAd', () => {

  it('should render component', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });
});

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if (args.length) {
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }

  static now() {
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionAtDate = (date, expectedDescription) => {
  it(`should show correct at ${date}`, () => {
    global.Date = mockDate(`${date}`);
    const component = shallow(<DaysToSummer />);
    const renderedDate = component.find(select.component).text();
    expect(renderedDate).toEqual(expectedDescription);
  
    global.Date = trueDate;
  });
};
  
describe('Component HappyHourAd with mocked Date', () => {
  checkDescriptionAtDate('2021-05-22', '30 days to summer!');
  checkDescriptionAtDate('2021-10-14', '250 days to summer!');
  checkDescriptionAtDate('2021-06-22', 'Holiday time! Book your next year trip!');
});