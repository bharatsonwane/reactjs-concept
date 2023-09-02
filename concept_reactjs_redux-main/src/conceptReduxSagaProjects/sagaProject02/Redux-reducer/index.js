import { combineReducers } from "redux";
import {UserReducer} from './UserReducer'


const rootReducer = combineReducers({
    UserReducer: UserReducer,
})

export default rootReducer