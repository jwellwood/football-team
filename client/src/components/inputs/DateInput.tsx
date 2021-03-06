import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker } from '@material-ui/pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { FormErrorMessage } from 'shared/messages/components';

interface Props {
  inputName: string;
  defaultValue?: string | Date;
  onChange: (date: Date | string) => void; // TODO
  label: string;
  // TODO
  validators?: any;
  errors?: any;
}

const DateInput: React.FC<Props> = ({
  inputName,
  defaultValue,
  onChange,
  label,
  validators,
  errors,
}) => {
  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          disableFuture
          color='secondary'
          inputVariant='filled'
          value={defaultValue}
          onChange={onChange}
          openTo='date'
          format='dd/MM/yyyy'
          label={label}
          name={inputName}
          views={['year', 'month', 'date']}
          margin='normal'
          fullWidth
          inputRef={validators}
        />
      </MuiPickersUtilsProvider>
      {errors ? <FormErrorMessage error={errors} /> : null}
    </>
  );
};

export default DateInput;
