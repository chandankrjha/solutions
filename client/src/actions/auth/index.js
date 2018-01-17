import * as types from "../constants/actionTypes";

export const login = (loginInfo) => {
  return {
    type: types.LOGIN,
    loginInfo
  }
}

export const logout = (sessionId) => {
  return {
    type: types.LOGOUT,
    sessionId
  }
}