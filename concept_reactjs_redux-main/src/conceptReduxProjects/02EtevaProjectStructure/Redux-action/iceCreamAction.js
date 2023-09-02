import { BUY_ICECREAM, ADD_ICECREAM } from './Types'

export const buyIceCreamAction = (model) => {
    console.log(model)
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