import { SHOW_MESSAGE } from '../types';

export const appReducer = function(state = {}, action) {
  switch (action.type) {
    case SHOW_MESSAGE:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};
