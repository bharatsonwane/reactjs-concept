import { BUY_ICECREAM, ADD_ICECREAM, ADD_ICECREAM_SUCCESS_ASYNC, ADD_ICECREAM_FAILURE_ASYNC } from '../Redux-action/Types'

const initialState = {
    numOfIceCreams: 20,
}

const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - action.payload
        }
        
        case ADD_ICECREAM :
            console.log(action.payload)
        return {
            ...state,
            payload: action.payload
        }
        
        case ADD_ICECREAM_SUCCESS_ASYNC: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams + action.payload
        }
        case ADD_ICECREAM_FAILURE_ASYNC: return {
            ...state,
            error: action.payload
        }
        default: return state
    }
}

export default iceCreamReducer