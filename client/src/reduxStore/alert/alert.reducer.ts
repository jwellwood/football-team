import { actionIds } from 'constants/actionIds';

const initialState = {
  open: false,
  text: '',
  type: '',
};

export type AlertState = typeof initialState;

export const alertReducer = (
  state: AlertState = { ...initialState },
  action
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
