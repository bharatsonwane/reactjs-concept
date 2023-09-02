import {
    GET_ALL_DATA, GET_ALL_DATA_SUCCESS, GET_ALL_DATA_FAILURE,
} from './Types'

// // List Users Action
export const getAllData = () => {
    // debugger
    return {
        type: GET_ALL_DATA,
    }
}
export const getAllDataSuccess = (response) => {
    // debugger
    return {
        type: GET_ALL_DATA_SUCCESS,
        payload: response
    }
}
export const getAllDataFailure = (error) => {
    // debugger
    return {
        type: GET_ALL_DATA_FAILURE,
        payload: error
    }
}
