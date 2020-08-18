import { actionIds } from 'constants/actionIds';
import { initSeasonState } from './initSeasonState';

const initialState = { ...initSeasonState };

type SeasonState = typeof initialState;

interface Action {
  type: string;
  payload: SeasonState;
}

export const seasonReducer = (
  state: SeasonState = { ...initialState },
  action: Action
): SeasonState => {
  const { type, payload } = action;
  switch (type) {
    case actionIds.GET_PREVIOUS_SEASONS:
      return handleSeasonAction(state, payload);
    case actionIds.GET_PREVIOUS_SEASON_BY_ID:
      return handleSeasonAction(state, payload);
    case actionIds.ADD_PREVIOUS_SEASON:
      return handleSeasonAction(state, payload);
    case actionIds.UPDATE_PREVIOUS_SEASON:
      return handleSeasonAction(state, payload);
    case actionIds.DELETE_PREVIOUS_SEASON:
      return handleSeasonAction(state, payload);
    case actionIds.ADD_PREVIOUS_AWARD:
      return handleSeasonAction(state, payload);
    case actionIds.DELETE_PREVIOUS_AWARD:
      return handleSeasonAction(state, payload);
    default:
      return state;
  }
};

const handleSeasonAction = (state: SeasonState, payload: SeasonState) => ({
  ...state,
  ...payload,
});
