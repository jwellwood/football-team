import React from 'react';
import { useForm } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import { ITeam } from 'shared/types';
import { SubmitButton } from 'components/buttons';
import { TextInput, SelectInput } from 'components/inputs';
import { FormContainer } from 'shared/layout/containers';
import { leaguePositionOptions } from '../utils';
import { button_text } from 'constants/text';
interface Props {
  onSubmit: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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

  const { name, location, league, position, currentSeason } = input;

  const inputData: IEditTeamInput[] = [
    {
      name: 'name',
      label: 'Name',
      defaultValue: name,
      errors: errors.name,
    },
    {
      name: 'location',
      label: 'Location',
      defaultValue: location,
      errors: errors.location,
    },
    {
      name: 'league',
      label: 'League Name',
      defaultValue: league,
      errors: errors.league,
    },
    {
      name: 'currentSeason',
      label: 'Current Season',
      defaultValue: currentSeason,
      errors: errors.currentSeason,
    },
  ];

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {inputData.map(({ name, label, defaultValue, errors }) => (
            <Grid key={name} item xs={12} sm={6}>
              <TextInput
                inputName={name}
                label={label}
                defaultValue={defaultValue}
                onChange={onChange}
                validators={register({
                  required: true,
                  minLength: 2,
                  maxLength: 30,
                })}
                errors={errors}
              />
            </Grid>
          ))}

          <Grid item xs={12} sm={6}>
            <SelectInput
              inputName='position'
              defaultValue={position}
              label='League Position'
              onChange={onChange}
              validators={register({ required: true })}
              errors={errors.position}
              options={leaguePositionOptions()}
            />
          </Grid>
        </Grid>
        <SubmitButton loading={loading}>{button_text.UPDATE}</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default EditTeamDetailsForm;
