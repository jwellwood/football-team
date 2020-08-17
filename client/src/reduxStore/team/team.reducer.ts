import { actionIds } from '../../constants/actionIds';

const initialState = {
  teamData: null,
  success: false,
};

type TeamState = typeof initialState;

interface Action {
  type: string;
  payload: {
    data: any; // TODO
    success: boolean;
  };
}

export const teamReducer = (
  state: TeamState = { ...initialState },
  action: Action
): TeamState => {
  const { type, payload } = action;
  switch (type) {
    case actionIds.GET_TEAM:
      return {
        ...state,
        success: payload.success,
        teamData: payload.data,
      };
    // Admin
    case actionIds.ADD_TEAM:
      return { ...state, ...payload };
    case actionIds.UPDATE_TEAM_DETAILS:
      return { ...state, ...payload };
    case actionIds.UPDATE_TEAM_PHOTO:
      return { ...state, ...payload };
    // Trophy
    case actionIds.ADD_NEW_TROPHY:
      return { ...state, ...payload };
    case actionIds.DELETE_TROPHY:
      return { ...state, ...payload };
    // HOF
    case actionIds.ADD_HALL_OF_FAMER:
      return { ...state, ...payload };
    case actionIds.UPDATE_HALL_OF_FAMER:
      return { ...state, ...payload };
    case actionIds.DELETE_HALL_OF_FAMER:
      return { ...state, ...payload };
    // IMAGES
    case actionIds.UPLOAD_TEAM_PHOTO:
      return { ...state, ...payload };
    case actionIds.REMOVE_ADMIN_IMAGE:
      return { ...state, ...payload };
    default:
      return state;
  }
};
