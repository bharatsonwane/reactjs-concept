import { takeEvery, all, call, put, delay, select } from "redux-saga/effects";
import { ADD_CAKE } from '../Redux-action/Types'
import { addCakeActionSuccessAsync, addCakeActionFailureAsync } from '../Redux-action/'

export const reducerModel = (state) => state.reducerCake;

const addCakeSaga = async (payload) => {
  console.log(`payload: ${payload}, `,'from Saga addCakeSaga => API Call')
  return payload
}

function* watchAddCake() {
  console.log('from Saga watchAddCake')
  let model = yield select(reducerModel)
  if (model.payload) {
    try {
      const response = yield call(addCakeSaga, model.payload)
      if (response) {
        // console.log(response)
        yield delay(4000);
        yield put(addCakeActionSuccessAsync(response))
      }
    } catch (error) {
      console.log(error);
      yield put(addCakeActionFailureAsync(error))
    }
  }
}



export const sagaCake = [
  takeEvery(ADD_CAKE, watchAddCake),
]
export default function* rootSaga() {
  yield all([...sagaCake])
}