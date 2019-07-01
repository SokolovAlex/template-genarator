import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createRootReducer from './reducers';

export const history = createBrowserHistory();

export default function configureStore(initialState = null) {

  const store = createStore(createRootReducer(history), initialState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
      ),
    ));

  if (module.hot) {
    module.hot.accept();
  }

  return store;
}
