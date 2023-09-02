import { combineReducers } from 'redux'
import cakeReducer from './features/cake/cakeReducer'
import iceCreamReducer from './features/iceCream/iceCreamReducer'

const rootReducer = combineReducers({
    reducerCake: cakeReducer,
    reducerIceCream: iceCreamReducer
})

export default rootReducer