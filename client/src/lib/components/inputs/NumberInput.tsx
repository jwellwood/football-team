import React from 'react';
// MUI
import TextField from '@material-ui/core/TextField';
// Internal
import FormErrorMessage from 'components/ui/messages/FormErrorMessage';

interface Props {
  inputName: string;
  defaultValue: number;
  onChange: (e) => void;
  label?: string;
  validators?: any; //TODO
  errors?: any; // TODO
  disabled?: boolean;
}

const NumberInput: React.FC<Props> = ({
  inputName,
  defaultValue,
  onChange,
  label,
  validators,
  errors,
  disabled,
}) => {
  return (
    <>
      <TextField
        type='number'
        color='secondary'
        name={inputName}
        defaultValue={defaultValue}
        onChange={onChange}
        label={label}
        variant='filled'
        margin='normal'
        fullWidth
        inputRef={validators}
        disabled={disabled}
      />
      {errors ? <FormErrorMessage type={label} error={errors} /> : null}
    </>
  );
};

export default NumberInput;
