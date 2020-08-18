import { actionIds } from 'constants/actionIds';
import { initResultsState } from './initResultsState';

const initialState = { ...initResultsState };

type ResultsState = typeof initialState;

export const resultsReducer = (
  state: ResultsState = { ...initialState },
  action
): ResultsState => {
  const { type, payload } = action;
  switch (type) {
    case actionIds.GET_ALL_RESULTS:
      return handleResultsAction(state, payload);
    default:
      return state;
  }
};

const handleResultsAction = (
  state: ResultsState,
  payload: ResultsState
): ResultsState => ({
  ...state,
  ...payload,
});
