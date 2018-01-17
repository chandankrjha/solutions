import * as types from "../actions/constants/actionTypes";
import * as cm from "../database/fetchWrapper";

const PRE_URL = '/api/v0/';
const USERS_URL = 'user';

const FINAL_USERS_URL = PRE_URL + USERS_URL;

export const getUserInfo = (id) => {
  return cm.getJson(FINAL_USERS_URL, {id: id});
}