import React from 'react';
import { useForm } from 'react-hook-form';
import Grid, { GridSize } from '@material-ui/core/Grid';
import FormContainer from 'shared/layout/FormContainer';
import { yearOptions } from 'shared/utils/select-options';
import { IHallOfFame } from 'shared/types';
import CenteredGrid from 'lib/components/grids/CenteredGrid';
import SubmitButton from 'lib/components/buttons/SubmitButton';
import TextInput from 'lib/components/inputs/TextInput';
import SelectInput from 'lib/components/inputs/SelectInput';
import DeleteHallOfFame from '../containers/DeleteHallOfFame.container';

interface Props {
  onSubmit: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  input?: any; // TODO
  loading: boolean;
  hof?: IHallOfFame;
  disabled?: boolean;
}

interface IHallOfFameInput {
  name: string;
  label: string;
  defaultValue: number;
  errors?: any; // TODO,
  size: GridSize;
}

const HOFForm: React.FC<Props> = ({
  onSubmit,
  onChange,
  input,
  loading,
  hof,
  disabled,
}) => {
  const { register, handleSubmit, errors } = useForm();
  const date: number = new Date().getFullYear();
  const inputData: IHallOfFameInput[] = [
    {
      name: 'yearInducted',
      label: 'Year Inducted',
      defaultValue: input.yearInducted,
      errors: errors.yearInducted,
      size: 4,
    },
    {
      name: 'yearJoined',
      label: 'Year Joined',
      defaultValue: input.yearJoined,
      errors: errors.yearJoined,
      size: 6,
    },
    {
      name: 'yearLeft',
      label: 'Year Left',
      defaultValue: input.yearLeft,
      errors: errors.yearLeft,
      size: 6,
    },
  ];

  const submitText: string = hof ? 'Update' : 'Add';

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CenteredGrid dir='row'>
          <Grid item xs={8} sm={8}>
            <TextInput
              inputName='name'
              label='Name'
              defaultValue={input.name}
              onChange={onChange}
              validators={register({
                required: true,
                minLength: 2,
                maxLength: 30,
              })}
              errors={errors.name || null}
            />
          </Grid>
          {inputData.map((input: IHallOfFameInput) => (
            <Grid
              key={input.name}
              item
              xs={input.size || 12}
              sm={input.size || 6}
            >
              <SelectInput
                inputName={input.name}
                label={input.label}
                defaultValue={input.defaultValue}
                onChange={onChange}
                options={yearOptions(2005, date)}
                errors={input.errors || null}
              />
            </Grid>
          ))}

          <Grid item xs={12}>
            <TextInput
              multiline
              inputName='description'
              label='Description'
              defaultValue={input.description}
              onChange={onChange}
              validators={register({ maxLength: 999 })}
              errors={errors.description || null}
            />
          </Grid>
        </CenteredGrid>
        <SubmitButton disabled={disabled} loading={loading}>
          {submitText}
        </SubmitButton>

        {hof ? <DeleteHallOfFame hof={hof} /> : null}
      </form>
    </FormContainer>
  );
};

export default HOFForm;
