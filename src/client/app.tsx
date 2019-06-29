import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import createStore, { history } from './store/createStore';

const store = createStore();

ReactDOM.render(
  <Provider compiler="Typescript" framework="React" bundler="Webpack" store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" render={() => (<div>Match</div>)} />
        <Route render={() => (<div>Miss</div>)} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
