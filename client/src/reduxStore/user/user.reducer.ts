import { actionIds } from '../../constants/actionIds';

const initialState = {
  userData: null,
  success: false,
};

type UserState = typeof initialState;

export const userReducer = (state: UserState = { ...initialState }, action) => {
  const { type, payload } = action;
  switch (type) {
    // Admin
    case actionIds.GET_ALL_USERS:
      return { ...state, ...payload };
    case actionIds.GET_USER_BY_ID:
      return { ...state, ...payload };
    case actionIds.SET_PERMISSIONS:
      return { ...state, ...payload };
    case actionIds.RESET_IMAGE:
      return { ...state, ...payload };
    // User
    case actionIds.UPDATE_PLAYER_DETAILS:
      return { ...state, ...payload };
    case actionIds.UPDATE_PLAYER_TARGETS:
      return { ...state, ...payload };
    case actionIds.UPLOAD_USER_IMAGE:
      return { ...state, ...payload };
    case actionIds.UPDATE_USER_IMAGE:
      return { ...state, ...payload };
    case actionIds.REMOVE_USER_IMAGE:
      return { ...state, ...payload };
    default:
      return state;
  }
};
