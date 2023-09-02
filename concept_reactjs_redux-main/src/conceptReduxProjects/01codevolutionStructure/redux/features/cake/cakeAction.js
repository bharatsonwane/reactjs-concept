// Redux Flow #=> from container dispatch(action) ==> action ==> reducer (called automatically) ==> store
// defining action creater function
// importing action type constant from cakeTypes


import { BUY_CAKE, ADD_CAKE } from './cakeTypes'

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
