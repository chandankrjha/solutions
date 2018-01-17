import {all} from "redux-saga/effects";
import appSagas from "./main/appSagas";
import userSagas from "./sagas/user"

export default function* rootSaga() {
  yield all([
    ...appSagas,
    ...userSagas
  ])
}

