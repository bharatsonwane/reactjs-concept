import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from "redux-saga";
import rootReducer from '../Redux-reducer/'
import rootSaga from '../Redux-Saga-Middleware/';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount rootReducer & Middleware on the Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// then run the saga
sagaMiddleware.run(rootSaga)

export default store