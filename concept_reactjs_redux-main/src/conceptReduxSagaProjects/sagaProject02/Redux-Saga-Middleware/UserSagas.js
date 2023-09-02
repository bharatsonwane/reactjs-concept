import { takeEvery, all, call, put, select, delay } from "redux-saga/effects";
import axios from "axios";
import { GET_ALL_DATA } from '../Redux-action/Types'
import {
    getAllDataSuccess, getAllDataFailure,
} from '../Redux-action'



export const reducerModel = (state) => state.UserReducer;


// // Task List Sagas
const getAllDataFromServer = async () => {
    // console.log('B- from Sagas')
    var url = "https://jsonplaceholder.typicode.com/posts";
    const request = await axios.get(url)
    return await request;
}

function* getAllData() {
    try {
        const response = yield call(getAllDataFromServer)
        if (response) {
            yield delay(2000)
            yield put(getAllDataSuccess(response.data))
        }
    } catch (error) {
        console.log(error);
        yield put(getAllDataFailure(error))
    }
}


export const UserSagas = [
    takeEvery(GET_ALL_DATA, getAllData),
]

export default function* rootSaga() {
    yield all([...UserSagas])
}