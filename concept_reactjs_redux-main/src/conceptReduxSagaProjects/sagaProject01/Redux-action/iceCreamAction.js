import { BUY_ICECREAM, ADD_ICECREAM, ADD_ICECREAM_SUCCESS_ASYNC, ADD_ICECREAM_FAILURE_ASYNC } from './Types'

export const buyIceCreamAction = (model) => {
    return {
        type: BUY_ICECREAM,
        payload: model
    }
}

export const addIceCreamAction = (model) => {
    return {
        type: ADD_ICECREAM,
        payload: model
    }
}

export const addIceCreamActionSuccessAsync = (response) => {
    return {
        type: ADD_ICECREAM_SUCCESS_ASYNC,
        payload: response
    }
}

export const addIceCreamActionFailureAsync = (error) => {
    return {
        type: ADD_ICECREAM_FAILURE_ASYNC,
        payload: error
    }
}