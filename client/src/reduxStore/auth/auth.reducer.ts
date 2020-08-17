import { actionIds } from 'constants/actionIds';

const initialState = {
  isAuth: false,
  isAdmin: false,
  userData: null,
};

type AuthState = typeof initialState;

export const authReducer = (
  state: AuthState = { ...initialState },
  action
): AuthState => {
  const { type, payload } = action;
  switch (type) {
    // Auth
    case actionIds.GET_AUTH:
      return {
        ...state,
        isAuth: payload.isAuth,
        isAdmin: payload.isAdmin,
        userData: payload.user,
      };
    // User
    case actionIds.SIGN_UP:
      return { ...state, ...payload };
    case actionIds.SIGN_IN:
      return { ...state, ...payload };
    case actionIds.SIGN_OUT:
      return { ...state, ...payload };
    case actionIds.UPDATE_USER_ACCOUNT:
      return { ...state, ...payload };
    case actionIds.CHECK_CURRENT_PASSWORD:
      return { ...state, ...payload };
    case actionIds.UPDATE_PASSWORD:
      return { ...state, ...payload };
    case actionIds.DELETE_USER:
      return { ...state, ...payload };
    case actionIds.FORGOT_PASSWORD:
      return { ...state, ...payload };
    case actionIds.RESET_PASSWORD:
      return { ...state, ...payload };
    case actionIds.VERIFY_EMAIL:
      return { ...state, ...payload };
    default:
      return state;
  }
};
