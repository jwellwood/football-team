import { actionIds } from '../../constants/actionIds';
import { initSquadState } from './initSquadState';

const initialState = { ...initSquadState };

type SquadState = typeof initialState;

interface IAction {
  type: string;
  payload: SquadState;
}

export const squadReducer = (
  state: SquadState = { ...initialState },
  action: IAction
): SquadState => {
  const { type, payload } = action;
  switch (type) {
    case actionIds.GET_ALL_PLAYERS:
      return handleSquadAction(state, payload);
    default:
      return state;
  }
};

const handleSquadAction = (state: SquadState, payload: SquadState) => ({
  ...state,
  ...payload,
});
