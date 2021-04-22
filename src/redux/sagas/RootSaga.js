import { all } from 'redux-saga/effects'
import { watchFetchSaga } from "./fetchDataSaga"

export default function* RootSaga () {
    yield all([
        watchFetchSaga()
    ])
}