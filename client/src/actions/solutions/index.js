import * as types from "../constants/actionTypes";

export const getAllSolutions = (offset, limit) => {
  return {
    type: types.GET_ALL_SOLUTIONS,
    offset,
    limit
  }
}

export const getASolutionForProblem = (solutionId) => {
  return {
    type: types.GET_SOLUTIONS_FOR_A_PROBLEM,
    id: solutionId
  }
}