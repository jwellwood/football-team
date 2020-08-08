export const onInputCheck = (
  e: React.ChangeEvent<HTMLInputElement>,
  input,
  setInput
) => {
  setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.checked,
  });
};
