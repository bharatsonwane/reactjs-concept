import {
    GET_ALL_DATA, GET_ALL_DATA_SUCCESS, GET_ALL_DATA_FAILURE,
} from '../Redux-action/Types'
import { REHYDRATE } from 'redux-persist/lib/constants';

// // Initial State
const initialState = {
    isLoading: false,
    dataList: null,
}


// // TaskAddReducer
export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        // // List Task Reducers
        case GET_ALL_DATA: return {
            ...state,
            isLoading: true,
        }

        case GET_ALL_DATA_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                dataList: action.payload
            }
        }
        case GET_ALL_DATA_FAILURE: return {
            ...state,
            isLoading: false,
        }

        case REHYDRATE: // "persist/REHYDRATE"
            return {
                ...state,
                dataList: action.payload ? action.payload.UserReducer.dataList : null
            };

        default: return { state }
    }
}


