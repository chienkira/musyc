import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

export default function configureStore(initialState) {
  const middlewares = [thunk]
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  if (process.env.NODE_ENV !== `production`) {
    const logger = createLogger();
    middlewares.push(logger);
  }

  const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(
      ...middlewares
    )
  ));

  if (process.env.NODE_ENV !== `production`) {
    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('../reducers', () => {
        const nextRootReducer = require('../reducers/index');
        store.replaceReducer(nextRootReducer);
      });
    }
  }

  return store
}