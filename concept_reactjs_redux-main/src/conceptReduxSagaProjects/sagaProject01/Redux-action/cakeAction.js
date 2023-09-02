// Redux Flow #=> from container dispatch(action) ==> action ==> reducer (called automatically) ==> store
// defining action creater function
// importing action type constant from cakeTypes


import  { BUY_CAKE, ADD_CAKE, ADD_CAKE_SUCCESS_ASYNC, ADD_CAKE_FAILURE_ASYNC } from './Types'

export const buyCakeAction = (model) => {
    return {
        type: BUY_CAKE,
        payload: model
    }
}

export const addCakeAction = (model) => {
    console.log("Add-cakeAction")
    return {
        type: ADD_CAKE,
        payload: model
    }
}

export const addCakeActionSuccessAsync = (response) => {
    return {
        type: ADD_CAKE_SUCCESS_ASYNC,
        payload: response
    }
}

export const addCakeActionFailureAsync = (error) => {
    return {
        type: ADD_CAKE_FAILURE_ASYNC,
        payload: error
    }
}

