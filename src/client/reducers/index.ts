import {combineReducers} from 'redux';
import breedList from './breedListReducer';
import searchResults from './searchResultsReducer';

const rootReducer = combineReducers({
  breedList,
  searchResults
});

export default rootReducer
