import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import template from './templates/reducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  template,
});
