// import { take, put, call, fork, select, all, takeEvery } from 'redux-saga/effects'
import { call, put, takeEvery } from 'redux-saga/effects'
// import * as actions from '../../actions/user';
import * as types from '../../actions/constants/actionTypes';
import * as api from '../../api';

function* getUserInfo(action) {
  
  try{
    const user = yield call(api.getUserInfo, action.id);

    yield put({type: types.GET_USER_INFO_SUCCESS, user});

  } catch(e) {
    yield put({type: types.GET_USER_INFO_FAILED, user: null})
  }
}

function* watchAll() {
  yield [
    takeEvery(types.GET_USER_INFO, getUserInfo)
  ]
}

export default watchAll;
