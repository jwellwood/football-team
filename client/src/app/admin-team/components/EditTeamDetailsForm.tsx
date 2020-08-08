import React from 'react';
import { useForm } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import { ITeam } from 'shared/types';
import SubmitButton from 'lib/components/buttons/SubmitButton';
import TextInput from 'lib/components/inputs/TextInput';
import SelectInput from 'lib/components/inputs/SelectInput';
import FormContainer from 'shared/layout/FormContainer';
import { leaguePositionOptions } from '../utils';
interface Props {
  onSubmit: () => void;
  onChange: (e) => void;
  input: ITeam;
  loading: boolean;
}

interface IEditTeamInput {
  name: string;
  label: string;
  defaultValue: string;
  errors?: any;
}

const EditTeamDetailsForm: React.FC<Props> = ({
  onSubmit,
  onChange,
  input,
  loading,
}) => {
  const { register, handleSubmit, errors } = useForm();

  const inputData: IEditTeamInput[] = [
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
              options={leaguePositionOptions()}
            />
          </Grid>
        </Grid>
        <SubmitButton loading={loading}>Update team</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default EditTeamDetailsForm;
