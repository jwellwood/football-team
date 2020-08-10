import { GET_ALL_PLAYERS, GET_PLAYER_BY_ID } from '../types';

const initialState = {
  squadData: null,
};

type SquadState = typeof initialState;

export const squadReducer = function (
  state: SquadState = { ...initialState },
  action
) {
  switch (action.type) {
    case GET_ALL_PLAYERS:
      return {
        ...state,
        success: action.payload.success,
        squadData: action.payload.data,
      };
    case GET_PLAYER_BY_ID:
      return {
        ...state,
        success: action.payload.success,
        data: action.payload.data,
        matchesPlayed: action.payload.data.matchesPlayed,
      };
    default:
      return state;
  }
};
