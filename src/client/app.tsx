import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

import { history } from './store/createStore';
import Layout from './containers/Layout/Layout';
import Creation from './containers/Creation/Creation';

const App: React.FC = () => (
  <ConnectedRouter history={history}>
    <Layout>
      <Switch>
        {/* <Redirect from="/" to="/creation" /> */}
        <Route exact={true} path='/' render={() => <Creation/>} />
        <Route exact={true} path='/import' render={() => <div>Import</div>} />
        <Route exact={true} path='/creation' render={() => <Creation/>} />
        <Route exact={true} render={() => <div>Miss</div>} />
      </Switch>
    </Layout>
  </ConnectedRouter>
);

export default App;
