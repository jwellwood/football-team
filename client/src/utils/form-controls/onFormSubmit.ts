import { showAlert } from 'reduxStore/alert';

export const onFormSubmit = (setLoading, dispatch, snack, onSuccess) => {
  setLoading(true);
  dispatch.then((res: any) => {
    const { success, message, type } = res.payload;
    setLoading(false);
    if (success) {
      if (snack) {
        snack(showAlert(true, message, type));
      }
      onSuccess();
      // route.push(routeTo);
    } else {
      snack(showAlert(true, message, type));
    }
  });
};
