import { createStore } from 'redux'
import rootReducer from '../Redux-reducer/rootReducer'

console.log('store-after import')

// // (createStore accept Reducer as parameter)
// // (provide this store to react application)


const store = createStore(rootReducer)
console.log('Store - after creating store')


export default store
