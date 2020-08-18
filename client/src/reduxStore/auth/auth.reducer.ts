import { actionIds } from 'constants/actionIds';
import { initAuthUserState } from './initAuthUserState';

const initialState = { ...initAuthUserState };

type AuthState = typeof initialState;

interface Action {
  type: string;
  payload: AuthState;
}

export const authReducer = (
  state: AuthState = { ...initialState },
  action: Action
): AuthState => {
  const { type, payload } = action;
  switch (type) {
    case actionIds.GET_AUTH:
      return handleAuthAction(state, payload);
    case actionIds.SIGN_UP:
      return handleAuthAction(state, payload);
    case actionIds.SIGN_IN:
      return handleAuthAction(state, payload);
    case actionIds.SIGN_OUT:
      return handleSignOutAction(state);
    case actionIds.UPDATE_USER_ACCOUNT:
      return handleAuthAction(state, payload);
    case actionIds.CHECK_CURRENT_PASSWORD:
      return handleAuthAction(state, payload);
    case actionIds.UPDATE_PASSWORD:
      return handleAuthAction(state, payload);
    case actionIds.DELETE_USER:
      return handleAuthAction(state, payload);
    case actionIds.FORGOT_PASSWORD:
      return handleAuthAction(state, payload);
    case actionIds.RESET_PASSWORD:
      return handleAuthAction(state, payload);
    case actionIds.VERIFY_EMAIL:
      return handleAuthAction(state, payload);
    default:
      return state;
  }
};

const handleAuthAction = (state: AuthState, payload: AuthState): AuthState => ({
  ...state,
  ...payload,
});
const handleSignOutAction = (state: AuthState): AuthState => ({
  ...state,
  ...initAuthUserState,
});
