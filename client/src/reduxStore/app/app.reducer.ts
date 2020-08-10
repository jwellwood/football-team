import { SHOW_MESSAGE } from '../types';

const initialState = {
  message: {
    open: false,
    text: '',
    type: '',
  },
};

type MessageState = typeof initialState;

export const appReducer = function (
  state: MessageState = { ...initialState },
  action
) {
  switch (action.type) {
    case SHOW_MESSAGE:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};
