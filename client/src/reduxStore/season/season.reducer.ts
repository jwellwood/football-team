import { actionIds } from '../../constants/actionIds';

const initialState = {
  data: null,
  success: false,
};

type SeasonState = typeof initialState;

interface Action {
  type: string;
  payload: {
    data: any;
    success: boolean;
  };
}

export const seasonReducer = (
  state: SeasonState = { ...initialState },
  action: Action
): SeasonState => {
  const { type, payload } = action;
  switch (type) {
    case actionIds.GET_PREVIOUS_SEASONS:
      return { ...state, ...payload };
    case actionIds.GET_PREVIOUS_SEASON_BY_ID:
      return { ...state, ...payload };
    case actionIds.ADD_PREVIOUS_SEASON:
      return { ...state, ...payload };
    case actionIds.UPDATE_PREVIOUS_SEASON:
      return { ...state, ...payload };
    case actionIds.DELETE_PREVIOUS_SEASON:
      return { ...state, ...payload };
    case actionIds.ADD_PREVIOUS_AWARD:
      return { ...state, ...payload };
    case actionIds.DELETE_PREVIOUS_AWARD:
      return { ...state, ...payload };
    default:
      return state;
  }
};
