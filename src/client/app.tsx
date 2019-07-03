import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Route, Switch } from 'react-router';

import { history } from './store/createStore';
import Layout from './containers/Layout/Layout';
import Creation from './containers/Creation/Creation';

const App: React.FC = () => (
  <ConnectedRouter history={history}>
    <Layout>
      <Switch>
        <Route exact={true} path='/import' render={() => <div>Import</div>} />
        <Route render={() => <Creation/>} />
      </Switch>
    </Layout>
  </ConnectedRouter>
);

export default App;
