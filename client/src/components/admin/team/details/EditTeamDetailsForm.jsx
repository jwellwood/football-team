import React from 'react';
import { useForm } from 'react-hook-form';
// MUI
import Grid from '@material-ui/core/Grid';
// Funtions
import { getLeaguePositionOptions } from 'shared/utils/select-options';
// Internal
import SubmitButton from 'lib/components/buttons/SubmitButton';
import TextInput from 'lib/components/inputs/TextInput';
import SelectInput from 'lib/components/inputs/SelectInput';
import FormContainer from 'shared/layout/FormContainer';

const EditTeamDetailsForm = ({ onSubmit, onChange, input, loading, team }) => {
  const { register, handleSubmit, errors } = useForm();

  const inputData = [
    {
      name: 'name',
      label: 'Name',
      defaultValue: input.name,
      errors: errors.name,
    },
    {
      name: 'location',
      label: 'Location',
      defaultValue: input.location,
      errors: errors.location,
    },
    {
      name: 'league',
      label: 'League Name',
      defaultValue: input.league,
      errors: errors.league,
    },
  ];

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {inputData.map((input) => (
            <Grid key={input.name} item xs={12} sm={6}>
              <TextInput
                inputName={input.name}
                label={input.label}
                defaultValue={input.defaultValue}
                onChange={onChange}
                validators={register({
                  required: true,
                  minLength: 2,
                  maxLength: 30,
                })}
                errors={input.errors || null}
              />
            </Grid>
          ))}

          <Grid item xs={12} sm={6}>
            <SelectInput
              inputName='position'
              defaultValue={input.position}
              label='League Position'
              onChange={onChange}
              validators={register({ required: true })}
              errors={errors.position || null}
              options={getLeaguePositionOptions()}
            />
          </Grid>
        </Grid>
        <SubmitButton loading={loading}>Update team</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default EditTeamDetailsForm;
