import { takeEvery, all, call, put, delay, select } from "redux-saga/effects";
import { ADD_ICECREAM } from '../Redux-action/Types'
import { addIceCreamActionSuccessAsync, addIceCreamActionFailureAsync } from '../Redux-action/'


export const reducerModel = (state) => state.reducerIceCream;

const addIceCreamSaga = async (payload) => {
  console.log(`payload: ${payload}, `, 'from Saga addIceCreamSaga => API Call')
  return payload
}

function* watchAddIceCream() {
  console.log('from Saga watchAddIceCream')
  let model = yield select(reducerModel)
  console.log(model)
  if (model.payload) {
    try {
      const response = yield call(addIceCreamSaga, model.payload)
      if (response) {
        console.log(response)
        yield delay(2000);
        yield put(addIceCreamActionSuccessAsync(response))
      }
    } catch (error) {
      console.log(error);
      yield put(addIceCreamActionFailureAsync(error))
    }
  }
}


export const sagaIceCream = [
  takeEvery(ADD_ICECREAM, watchAddIceCream),
]
export default function* rootSaga() {
  yield all([...sagaIceCream])
}