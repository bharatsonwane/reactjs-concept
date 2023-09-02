// Reducers are called automatically after an dispatched(action) i.e. action dispatched
// Reducers are responsible for particular state in the store.
// Reducers return new form of state.
// Reducers should not change (previous) state but return new state.
//-----------------------------------------------------------------

// // (reducer is function that accept state and action as parameter  ==> cakeReducer = (state, action) => {}
// // & return new state)

import { BUY_CAKE, ADD_CAKE, ADD_CAKE_SUCCESS_ASYNC, ADD_CAKE_FAILURE_ASYNC } from '../Redux-action/Types'

const initialState = {
    numOfCakes: 10
}

// if state is not mention execute initial state as default 
// we get action from  "mapDispatchToProps" which  dispatch the "action creato" that return action  
const cakeReducer = (state = initialState, action) => {
    console.log('cakeReduceer => before switch')
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - action.payload
        }

        case ADD_CAKE :return {
            ...state,
            payload: action.payload
        }

        case ADD_CAKE_SUCCESS_ASYNC: return {
            ...state,
            numOfCakes: state.numOfCakes + action.payload
        }

        case ADD_CAKE_FAILURE_ASYNC: return {
            ...state,
            error: action.payload
        }
        default: return state
    }
}

export default cakeReducer


