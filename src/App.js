import React from 'react';
import {connect} from 'react-redux';
import styles from './App.scss';
import {BrowserRouter, Route} from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import PropTypes from 'prop-types';

import MainLayout from './components/layout/MainLayout/MainLayout';

//For full view
import Home from './components/views/Home/Home';
import Trips from './components/views/Trips/TripsContainer';
import Countries from './components/views/Countries/CountriesContainer';
import Regions from './components/views/Regions/RegionsContainer';
import Info from './components/views/Info/Info';
import NotFound from './components/views/NotFound/NotFound';

//Special view selected by id
import Trip from './components/views/Trip/TripContainer';
import Country from './components/views/Country/CountryContainer';

import parseTrips from './utils/parseTrips';
import {setMultipleStates} from './redux/globalRedux';

class App extends React.Component {
  static propTypes = {
    trips: PropTypes.array,
    setStates: PropTypes.func,
  }

  constructor(props){
    super(props);
    // parse trips when App is first created
    parseTrips(this.props.trips, this.props.setStates);
  }

  componentDidUpdate(prevProps){
    if(prevProps.trips != this.props.trips){
      // parse trips again if they changed
      parseTrips(this.props.trips, this.props.setStates);
    }
  }

  render(){
    return (
      <BrowserRouter>
        <MainLayout>
          <AnimatedSwitch 
            atEnter={{ opacity: 0, top: -200 }}
            atLeave={{ opacity: 0}}
            atActive={{ opacity: 1, top: 0 }}
            className={styles.switchWrapper}
            location={location}
          >
            <Route exact path='/' component={Home} />
            <Route exact path='/trips' component={props => <Trips {...props} />} />
            <Route exact path='/countries' component={props => <Countries {...props} />} />
            <Route exact path='/regions' component={props => <Regions {...props} />} />
            <Route exact path='/info' component={Info} />
            <Route exact path='/trip/:id' component={props => <Trip {...props} />} />
            <Route exact path='/country/:id' component={props => <Country {...props} />} />
            <Route path='*' component={NotFound} />
          </AnimatedSwitch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  trips: state.trips,
});

const mapDispatchToProps = dispatch => ({
  setStates: newState => dispatch(setMultipleStates(newState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
