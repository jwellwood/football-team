import { actionIds } from '../../constants/actionIds';

const initialState = {
  squadData: null,
  data: null,
  success: false,
  matchesPlayed: [],
};

type SquadState = typeof initialState;

export const squadReducer = (
  state: SquadState = { ...initialState },
  action
): SquadState => {
  const { type, payload } = action;
  switch (type) {
    case actionIds.GET_ALL_PLAYERS:
      return {
        ...state,
        success: payload.success,
        squadData: payload.data,
      };
    case actionIds.GET_PLAYER_BY_ID:
      return {
        ...state,
        success: payload.success,
        data: payload.data,
        matchesPlayed: payload.data.matchesPlayed,
      };
    default:
      return state;
  }
};
