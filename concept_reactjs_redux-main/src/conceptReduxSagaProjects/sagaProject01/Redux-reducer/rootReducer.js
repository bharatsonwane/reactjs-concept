import { combineReducers } from 'redux'
import cakeReducer from './cakeReducer'
import iceCreamReducer from './iceCreamReducer'


const rootReducer = combineReducers({
    reducerCake: cakeReducer,
    reducerIceCream: iceCreamReducer,
})

export default rootReducer