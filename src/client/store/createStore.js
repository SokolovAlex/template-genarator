/* global window:true */
/* eslint no-underscore-dangle: 0 */
import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import rootReducer from './reducers';
import { isProd, isClient } from '../../../config';
import LocatorEpics from './epics';

const epicMiddleware = createEpicMiddleware();

export default function configureStore(initialState) {
  const devtools = isClient === true ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null;
  const composeEnhancers = isProd === false && typeof devtools === 'function' ? devtools : compose;

  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(epicMiddleware)));
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      // eslint-disable-next-line
      const nextRootReducer = require('./reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  epicMiddleware.run(combineEpics(LocatorEpics));

  return store;
}
