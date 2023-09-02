import {
    GET_ALL_DATA, GET_ALL_DATA_SUCCESS, GET_ALL_DATA_FAILURE,
} from './Types'

// // List Users Action
export const getAllData = (model) => ({
    type: GET_ALL_DATA, payload: model
})

export const getAllDataSuccess = (response) => ({
    type: GET_ALL_DATA_SUCCESS, payload: response
})

export const getAllDataFailure = (error) => ({
    type: GET_ALL_DATA_FAILURE, payload: error
})

