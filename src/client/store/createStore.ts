import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension';
import createRootReducer from './reducers';

export const history = createBrowserHistory()

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
