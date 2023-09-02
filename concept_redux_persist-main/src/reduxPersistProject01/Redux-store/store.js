import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from "redux-saga";
import rootReducer from '../Redux-reducer/'
import rootSaga from '../sagas/';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


// create persistConfig & persistedReducer
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount persistedReducer & Middleware on the Store
let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

let persistor = persistStore(store);
// then run the saga
sagaMiddleware.run(rootSaga)


export {store, persistor, sagaMiddleware }
