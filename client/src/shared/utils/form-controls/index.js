import { showMessage } from 'reduxStore/app/message_actions';

export const onInputChange = (e, input, setInput) =>
  setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value,
  });

export const onInputCheck = (e, input, setInput) => {
  setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.checked,
  });
};

export const onFormSubmit = (setLoading, dispatch, snack, onSuccess) => {
  setLoading(true);
  dispatch.then((res) => {
    const { success, message, type } = res.payload;
    setLoading(false);
    if (success) {
      if (snack) {
        snack(showMessage(true, message, type));
      }
      onSuccess();
      // route.push(routeTo);
    } else {
      snack(showMessage(true, message, type));
    }
  });
};
