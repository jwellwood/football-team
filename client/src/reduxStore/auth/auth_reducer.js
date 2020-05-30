import {
  // Auth
  GET_AUTH,
  // User
  SIGN_UP,
  SIGN_IN,
  SIGN_OUT,
  CHECK_CURRENT_PASSWORD,
  UPDATE_PASSWORD,
  UPDATE_USER_ACCOUNT,
  DELETE_USER,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  VERIFY_EMAIL,
} from '../types';

export const authReducer = function (state = {}, action) {
  switch (action.type) {
    // Auth
    case GET_AUTH:
      return {
        ...state,
        isAuth: action.payload.isAuth,
        isAdmin: action.payload.isAdmin,
        userData: action.payload.user,
      };
    // User
    case SIGN_UP:
      return { ...state, success: action.payload };
    case SIGN_IN:
      return { ...state, success: action.payload };
    case SIGN_OUT:
      return { ...state, success: action.payload };
    case UPDATE_USER_ACCOUNT:
      return { ...state, success: action.payload };
    case CHECK_CURRENT_PASSWORD:
      return { ...state, success: action.payload };
    case UPDATE_PASSWORD:
      return { ...state, success: action.payload };
    case DELETE_USER:
      return { ...state, success: action.payload };
    case FORGOT_PASSWORD:
      return { ...state, success: action.payload };
    case RESET_PASSWORD:
      return { ...state, success: action.payload };
    case VERIFY_EMAIL:
      return { ...state, success: action.payload };
    default:
      return state;
  }
};
