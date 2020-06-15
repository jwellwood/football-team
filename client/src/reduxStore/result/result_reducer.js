import {
  // Admin
  ADD_RESULT,
  UPDATE_RESULT,
  DELETE_RESULT,
  ADD_MATCH_PLAYER,
  DELETE_MATCH_PLAYER,
  GET_ALL_RESULTS,
  GET_RESULT_BY_ID,
  GET_LATEST_RESULT,
} from '../types';

export const resultReducer = function (state = {}, action) {
  switch (action.type) {
    // Results
    case ADD_RESULT:
      return { ...state, message: action.payload };
    case UPDATE_RESULT:
      return { ...state, message: action.payload };
    case DELETE_RESULT:
      return { ...state, message: action.payload };
    case ADD_MATCH_PLAYER:
      return { ...state, message: action.payload };
    case DELETE_MATCH_PLAYER:
      return { ...state, message: action.payload };
    case GET_ALL_RESULTS:
      return {
        ...state,
        success: action.payload.success,
        data: action.payload.data,
      };
    case GET_RESULT_BY_ID:
      return { ...state, success: action.payload };
    case GET_LATEST_RESULT:
      return { ...state, success: action.payload };
    default:
      return state;
  }
};
