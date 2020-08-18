import React from 'react';
// MUI
import TextField from '@material-ui/core/TextField';
// Internal
import { FormErrorMessage } from 'shared/messages/components';

interface Props {
  inputName: string;
  defaultValue?: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  validators?; // TODO
  errors?: object; // TODO
  isPassword?: boolean;
  isEmail?: boolean;
  multiline?: boolean;
}

const TextInput: React.FC<Props> = ({
  inputName,
  defaultValue,
  onChange,
  label,
  validators,
  errors,
  isPassword,
  isEmail,
  multiline,
}) => {
  return (
    <>
      <TextField
        color='secondary'
        type={isPassword ? 'password' : 'text'}
        multiline={multiline}
        rows={3}
        name={inputName}
        defaultValue={defaultValue}
        onChange={onChange}
        label={label}
        variant='filled'
        margin='normal'
        fullWidth
        inputRef={validators}
      />
      {errors ? <FormErrorMessage error={errors} /> : null}
    </>
  );
};

export default TextInput;
