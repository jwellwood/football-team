import React from 'react';
import TextField from '@material-ui/core/TextField';
import { FormErrorMessage } from 'shared/messages/components';

interface Props {
  inputName: string;
  defaultValue?: any; //TODO
  onChange: (e) => void;
  label?: string;
  validators?: any; //TODO
  errors?: any; //TODO
}

const FileInput: React.FC<Props> = ({
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
