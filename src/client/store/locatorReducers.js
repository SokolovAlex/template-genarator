import { combineReducers } from 'redux';
import filters from './filters/reducer';
import list from './list/reducer';
import loaders from './loaders/reducer';

export default combineReducers({
  filters,
  list,
  loaders,
});
