import { actionIds } from 'constants/actionIds';

type ShowAlert = (open: boolean, text: string, type: string) => void;

export const showAlert: ShowAlert = (open, text, type) => {
  return {
    type: actionIds.SHOW_ALERT,
    payload: { open, text, type },
  };
};
