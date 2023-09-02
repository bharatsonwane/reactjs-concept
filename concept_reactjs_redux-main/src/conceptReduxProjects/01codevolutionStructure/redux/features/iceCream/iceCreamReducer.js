import { BUY_ICECREAM, ADD_ICECREAM } from './iceCreamTypes'
const initialState = {
    numOfIceCreams: 20
}

const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - action.payload,
            payload: action.payload
        }

        case ADD_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams + action.payload,
            payload: action.payload
        }

        default: return state
    }
}

export default iceCreamReducer