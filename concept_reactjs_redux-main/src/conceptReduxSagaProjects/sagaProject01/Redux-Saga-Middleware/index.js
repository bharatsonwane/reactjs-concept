import { all } from "redux-saga/effects";
import sagaCake from './sagaCake'
import sagaIceCream from './sagaIceCream'

export default function* rootSaga(){
    yield all([
        sagaCake(),
        sagaIceCream(),
    ])
}