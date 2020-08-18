import { actionIds } from 'constants/actionIds';
import { initResultState } from './initResultState';

const initialState = { ...initResultState };

type ResultState = typeof initialState;

interface Action {
  type: string;
  payload: ResultState;
}
export const resultReducer = (
  state: ResultState = { ...initialState },
  action: Action
): ResultState => {
  const { type, payload } = action;
  switch (type) {
    case actionIds.GET_RESULT_BY_ID:
      return handleResultAction(state, payload);
    case actionIds.ADD_RESULT:
      return handleResultAction(state, payload);
    case actionIds.UPDATE_RESULT:
      return handleResultAction(state, payload);
    case actionIds.DELETE_RESULT:
      return handleResultAction(state, payload);
    case actionIds.ADD_MATCH_PLAYER:
      return handleResultAction(state, payload);
    case actionIds.DELETE_MATCH_PLAYER:
      return handleResultAction(state, payload);
    default:
      return state;
  }
};

const handleResultAction = (
  state: ResultState,
  payload: ResultState
): ResultState => ({
  ...state,
  ...payload,
});
