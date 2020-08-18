import { actionIds } from 'constants/actionIds';
import { initPlayerState } from './initPlayerState';

const initialState = { ...initPlayerState };

type PlayerState = typeof initialState;

interface IAction {
  type: string;
  payload: PlayerState;
}

export const playerReducer = (
  state: PlayerState = { ...initialState },
  action: IAction
): PlayerState => {
  const { type, payload } = action;
  switch (type) {
    case actionIds.GET_PLAYER_BY_ID:
      return handlePlayerAction(state, payload);
    default:
      return state;
  }
};

const handlePlayerAction = (
  state: PlayerState,
  payload: PlayerState
): PlayerState => ({
  ...state,
  ...payload,
});
