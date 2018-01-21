import * as types from "../constants/actionTypes";

export const registerAUser = (userInfo) => {
  return {
    type: types.REGISTER_A_USER,
    userInfo
  }
}

export const updateUserProfile = (userInfo) => {
  return {
    type: types.UPDATE_USER_INFO,
    userInfo
  }
}

export const getUserInfo = (id) => {
  return {
    type: types.GET_USER_INFO
  }
}