import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  
  const expectedLink = '/trip/abc';
  const expectedImage = 'image.jpg';
  const expectedAltName = 'alt';
  const expectedCost = '$100';
  const expectedDays = 7;
  let expectedTags = ['tag1', 'tag2', 'tag3'];
  const tripId = 'abc';
  const component = shallow(<TripSummary
    id={tripId}
    image={expectedImage}
    name={expectedAltName} 
    cost={expectedCost}
    days={expectedDays}
    tags={expectedTags} />);
  console.log(component.debug());
  it('should render correct link', () => {
    const renderedLink = component.find('.link').prop('to');
    expect(renderedLink).toEqual(expectedLink);
  });
  it('should render correct image & alt', () => {
    const renderedImage = component.find('img').prop('src');
    const renderedAltName= component.find('img').prop('alt');
    //const component = shallow(<TripSummary image={expectedImage} name={expectedAltName} />)
    expect(renderedImage).toEqual(expectedImage);
    expect(renderedAltName).toEqual(expectedAltName);
  });
  it('should render correct props: name, cost, days', () => {
    const renderedName = component.find('.title').text();
    const renderedCostAndDays = component.find('.details').text();
    expect(renderedName).toEqual(expectedAltName);
    expect(renderedCostAndDays).toEqual(`${expectedDays} daysfrom ${expectedCost}`);
  });
  it('should render correct tags array', () => {
    const renderedTagOne = component.find('.tags span').at(0).text();
    const renderedTagTwo = component.find('.tags span').at(1).text();
    const renderedTagThree = component.find('.tags span').at(2).text();
    expect([renderedTagOne, renderedTagTwo, renderedTagThree]).toEqual(expectedTags);
  });
});