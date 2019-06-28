import { combineReducers } from 'redux';
import modals from '../../store/reducers/modals';
import breakpoints from '../../store/reducers/breakpoints';
import locator from './locatorReducers';

const reducers = {
  modals,
  breakpoints,
  locator,
};

export default combineReducers(reducers);
