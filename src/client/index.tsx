import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';

import createStore, { history } from './store/createStore';
import Creation from './containers/Creation/Creation';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact={true} path='/' render={() => <Creation/>} />
        <Route render={() => (<div>Miss</div>)} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
