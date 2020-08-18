export const onInputCheck = (
  e: React.ChangeEvent<HTMLInputElement>,
  input: any, // TODO
  setInput: any
) => {
  setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.checked,
  });
};
