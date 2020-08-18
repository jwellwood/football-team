import { actionIds } from 'constants/actionIds';
import { initAlertState } from './initAlertState';

const initialState = { ...initAlertState };

export type AlertState = typeof initialState;

interface Action {
  type: string;
  payload: AlertState;
}

export const alertReducer = (
  state: AlertState = { ...initialState },
  action: Action
): AlertState => {
  const { payload, type } = action;
  switch (type) {
    case actionIds.SHOW_ALERT:
      return handleShowAlertAction(state, payload);
    default:
      return state;
  }
};

const handleShowAlertAction = (
  state: AlertState,
  payload: AlertState
): AlertState => ({
  ...state,
  ...payload,
});
