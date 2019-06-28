import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'core-js/es6/promise';
import createStore from './store/createStore';
import LocatorPage from './pages/locator/index';

import '../layouts/Layout/Layout.scss';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <LocatorPage />
  </Provider>,
  document.getElementById('partner-locator')
);
