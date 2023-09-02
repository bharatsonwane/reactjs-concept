import { applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import Reactotron from "reactotron-react-native";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
}

// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */
  const middleware = []
  const enhancers = []

  /* ------------- Saga Middleware ------------- */
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  /* ------------- Assemble Middleware ------------- */
  enhancers.push(applyMiddleware(...middleware))

  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = Reactotron.createStore(persistedReducer, compose(...enhancers));
  const persistor = persistStore(store)

  // kick off root saga
  sagaMiddleware.run(rootSaga)

  return { store, persistor };
}