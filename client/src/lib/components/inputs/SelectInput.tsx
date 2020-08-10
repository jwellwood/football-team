import React from 'react';
import TextField from '@material-ui/core/TextField';
import { FormErrorMessage } from 'shared/messages/components';

export interface ISelectOptions {
  text: string;
  value: string | boolean;
  disabled?: boolean;
}

interface Props {
  inputName: string;
  defaultValue?: string | boolean | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  validators?: any; //TODO
  errors?: any; // TODO
  options: any;
  data_id?: string;
}

const SelectInput: React.FC<Props> = ({
  inputName,
  defaultValue,
  onChange,
  label,
  validators,
  errors,
  options,
  data_id,
}) => {
  return (
    <>
      <TextField
        select
        SelectProps={{
          native: true,
        }}
        data-id={data_id}
        color='secondary'
        name={inputName}
        defaultValue={defaultValue}
        onChange={onChange}
        label={label}
        variant='filled'
        margin='normal'
        fullWidth
        inputRef={validators}
      >
        {options.map((option) => (
          <option
            key={option.text}
            disabled={option.disabled}
            value={option.value}
          >
            {option.text}
          </option>
        ))}
      </TextField>
      {errors ? <FormErrorMessage type={label} error={errors} /> : null}
    </>
  );
};

export default SelectInput;
