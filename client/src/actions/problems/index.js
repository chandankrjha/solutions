import * as types from "../constants/actionTypes";

export const getAllProblems = (offset, limit) => {
  return {
    type: types.GET_ALL_PROBLEMS,
    offset,
    limit
  }
}

export const getAProblem = (id) => {
  return {
    type: types.GET_A_PROBLEM,
    id
  }
}