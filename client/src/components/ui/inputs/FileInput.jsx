import React from 'react';
// MUI
import TextField from '@material-ui/core/TextField';
// Internal
import FormErrorMessage from 'components/ui/messages/FormErrorMessage';

const FileInput = ({
  inputName,
  defaultValue,
  onChange,
  label,
  validators,
  errors,
}) => {
  return (
    <>
      <TextField
        type='file'
        color='secondary'
        name={inputName}
        defaultValue={defaultValue}
        onChange={onChange}
        variant='outlined'
        margin='normal'
        fullWidth
        inputRef={validators}
      />

      {errors ? <FormErrorMessage type={label} error={errors} /> : null}
    </>
  );
};

export default FileInput;
