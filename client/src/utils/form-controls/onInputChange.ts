export const onInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  input,
  setInput
) =>
  setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value,
  });
