import { actionIds } from 'constants/actionIds';
import { initUserState } from './initUserState';

const initialState = { ...initUserState };

type UserState = typeof initialState;

interface Action {
  type: string;
  payload: UserState;
}
export const userReducer = (
  state: UserState = { ...initialState },
  action: Action
) => {
  const { type, payload } = action;
  switch (type) {
    case actionIds.GET_ALL_USERS:
      return handleUserAction(state, payload);
    case actionIds.GET_USER_BY_ID:
      return handleUserAction(state, payload);
    case actionIds.SET_PERMISSIONS:
      return handleUserAction(state, payload);
    case actionIds.RESET_IMAGE:
      return handleUserAction(state, payload);
    case actionIds.UPDATE_PLAYER_DETAILS:
      return handleUserAction(state, payload);
    case actionIds.UPDATE_PLAYER_TARGETS:
      return handleUserAction(state, payload);
    case actionIds.UPLOAD_USER_IMAGE:
      return handleUserAction(state, payload);
    case actionIds.UPDATE_USER_IMAGE:
      return handleUserAction(state, payload);
    case actionIds.REMOVE_USER_IMAGE:
      return handleUserAction(state, payload);
    default:
      return state;
  }
};

const handleUserAction = (state: UserState, payload: UserState) => ({
  ...state,
  ...payload,
});
