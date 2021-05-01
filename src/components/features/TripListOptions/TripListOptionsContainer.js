import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, changeSearchTag, changeSearchDuration} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  changeSearchTag: tags => dispatch(changeSearchTag(tags)),
  changeSearchDuration: duration => dispatch(changeSearchDuration(duration)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
