import {
    GET_ALL_DATA, GET_ALL_DATA_SUCCESS, GET_ALL_DATA_FAILURE,
} from '../Redux-action/Types'


// // Initial State
const initialState = {
    isLoading: false,
    payload: null,
    dataListResponse: null,
    dataListError: null,
}


// // TaskAddReducer
export const UserReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_ALL_DATA: return {
            ...state, isLoading: true, payload: action.payload, dataListResponse: null, dataListError: null
        }

        case GET_ALL_DATA_SUCCESS: return {
            ...state, isLoading: false, dataListResponse: action.payload
        }

        case GET_ALL_DATA_FAILURE: return {
            ...state, isLoading: false, dataListError: action.payload
        }

        default: return { ...state }
    }
}


