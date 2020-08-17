import { actionIds } from 'constants/actionIds';

const initialState = {
  data: null,
  success: false,
};

type ResultState = typeof initialState;

export const resultReducer = (
  state: ResultState = { ...initialState },
  action
): ResultState => {
  const { type, payload } = action;
  switch (type) {
    // Results
    case actionIds.ADD_RESULT:
      return { ...state, ...payload };
    case actionIds.UPDATE_RESULT:
      return { ...state, ...payload };
    case actionIds.DELETE_RESULT:
      return { ...state, ...payload };
    case actionIds.ADD_MATCH_PLAYER:
      return { ...state, ...payload };
    case actionIds.DELETE_MATCH_PLAYER:
      return { ...state, ...payload };
    case actionIds.GET_ALL_RESULTS:
      return { ...state, ...payload };
    case actionIds.GET_RESULT_BY_ID:
      return { ...state, ...payload };
    case actionIds.GET_LATEST_RESULT:
      return { ...state, ...payload };
    default:
      return state;
  }
};
