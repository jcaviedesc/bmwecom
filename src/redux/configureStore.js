// import { configureStore } from '@reduxjs/toolkit'

// import rootReducer from './RootReducer'

// const store = configureStore({
//   reducer: rootReducer
// })

// if (process.env.NODE_ENV === 'development' && module.hot) {
//   module.hot.accept('./rootReducer', () => {
//     const newRootReducer = require('./rootReducer').default
//     store.replaceReducer(newRootReducer)
//   })
// }

// export default store
import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import monitorReducersEnhancer from './enhancers/MonitorReducers'
import loggerMiddleware from './middleware/Logger'
import rootReducer from './RootReducers'
import rootSaga from '../sagas'

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware]
  const sagaMiddleware = createSagaMiddleware()
  middlewares.push(sagaMiddleware)
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  const composeEnhancers = process.env.NODE_ENV !== 'production'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose
  const store = createStore(rootReducer, preloadedState, composeEnhancers(...enhancers))
  sagaMiddleware.run(rootSaga)
  
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./RootReducers', () => store.replaceReducer(rootReducer))
  }

  return store
}