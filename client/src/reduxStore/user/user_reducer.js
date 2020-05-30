import {
  // Admin
  GET_ALL_USERS,
  // User
  UPDATE_PLAYER_DETAILS,
  UPDATE_PLAYER_TARGETS,
  UPDATE_USER_IMAGE,
  UPLOAD_USER_IMAGE,
  REMOVE_USER_IMAGE,
  GET_USER_BY_ID,
  SET_PERMISSIONS,
  RESET_IMAGE
} from '../types';

export const userReducer = function(state = {}, action) {
  switch (action.type) {
    // Admin
    case GET_ALL_USERS:
      return { ...state, message: action.payload };
    case GET_USER_BY_ID:
      return { ...state, message: action.payload };
    case SET_PERMISSIONS:
      return { ...state, message: action.payload };
    case RESET_IMAGE:
      return { ...state, message: action.payload };
    // User
    case UPDATE_PLAYER_DETAILS:
      return { ...state, success: action.payload };
    case UPDATE_PLAYER_TARGETS:
      return { ...state, success: action.payload };
    case UPLOAD_USER_IMAGE:
      return { ...state, success: action.payload };
    case UPDATE_USER_IMAGE:
      return { ...state, success: action.payload };
    case REMOVE_USER_IMAGE:
      return { ...state, success: action.payload };
    default:
      return state;
  }
};
