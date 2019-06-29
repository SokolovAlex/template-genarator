import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import template from './templates/reducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  template
})
