import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'

const logger = createLogger()

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store
}