import { SHOW_MESSAGE } from '../types';

export function showMessage(open, text, type) {
  return {
    type: SHOW_MESSAGE,
    payload: { open, text, type }
  };
}
