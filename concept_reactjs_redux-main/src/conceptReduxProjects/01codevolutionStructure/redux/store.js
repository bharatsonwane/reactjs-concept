// // (createStore accept cakeReducer as parameter)
// // (provide this store to react application)

import { createStore } from 'redux'


import rootReducer from './rootReducer'
const store = createStore(rootReducer)


export default store
