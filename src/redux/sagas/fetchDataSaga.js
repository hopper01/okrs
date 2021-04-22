import { call, put, takeEvery } from "redux-saga/effects";
import { types } from "../types";
import axios from "axios";
import { fetchDataSuccess, fetchDataFailure } from "../action";
import { BASE_URL } from "../../utils/index";

function* fetchResults(action) {
  try {
    const resp = yield call(() => axios.get(BASE_URL));
    yield put(fetchDataSuccess(resp.data.data));
  } catch (e) {
    yield put(fetchDataFailure(e));
  }
}

/*
  Allows concurrent fetches of results.
*/
export function* watchFetchSaga() {
  yield takeEvery(types.SEND_REQUEST, fetchResults);
}
