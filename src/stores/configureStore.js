import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'

export default function configureStore(initialState) {
  const enhancers = []
  const middlewares = [
    thunk
  ]

  const devToolsExtension = window.devToolsExtension
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
  
  if (process.env.NODE_ENV !== `production`) {
    const logger = createLogger();
    middlewares.push(logger);
  }

  const composedEnhancers = compose(
    applyMiddleware(...middlewares),
    ...enhancers
  )

  const store = createStore(rootReducer, initialState, composedEnhancers);

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