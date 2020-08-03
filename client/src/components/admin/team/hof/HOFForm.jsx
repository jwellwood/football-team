import React from 'react';
import { useForm } from 'react-hook-form';
//MUI
import Grid from '@material-ui/core/Grid';
// Components
import FormContainer from 'shared/layout/FormContainer';
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import SubmitButton from 'lib/components/buttons/SubmitButton';
import TextInput from 'lib/components/inputs/TextInput';
import DeleteHOFLogic from './DeleteHOFLogic';
import SelectInput from 'components/ui/inputs/SelectInput';
import { yearOptions } from 'shared/utils/select-options';

const HOFForm = ({ onSubmit, onChange, input, loading, hof, disabled }) => {
  const { register, handleSubmit, errors } = useForm();
  const date = new Date().getFullYear();
  const inputData = [
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

  const submitText = hof ? 'Update' : 'Add';

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
          {inputData.map((input) => (
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

        {hof ? <DeleteHOFLogic hof={hof} /> : null}
      </form>
    </FormContainer>
  );
};

export default HOFForm;
