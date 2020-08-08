import React from 'react';
import { useForm } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import { admin_routes } from 'router';
import { yearOptions } from 'utils/helpers';
import { IPreviousSeason } from 'shared/types';
import FormContainer from 'shared/layout/FormContainer';
import SubmitButton from 'lib/components/buttons/SubmitButton';
import TextInput from 'lib/components/inputs/TextInput';
import NumberInput from 'lib/components/inputs/NumberInput';
import CenteredGrid from 'lib/components/grids/CenteredGrid';
import CustomLinkButton from 'lib/components/buttons/CustomLinkButton';
import AdminAwardsList from './AdminAwardsList';
import DeletePrevSeason from '../containers/DeletePreviousSeason.container';
import SelectInput from 'lib/components/inputs/SelectInput';

interface Props {
  onSubmit: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  loading: boolean;
  input?: any;
  season?: IPreviousSeason;
}

interface IPreviousSeasonInput {
  name: string;
  label: string;
  defaultValue: number;
  min?: number;
  max?: number;
  errors?: any;
}

const PrevSeasonForm: React.FC<Props> = ({
  onSubmit,
  onChange,
  loading,
  input,
  season,
}) => {
  const { register, handleSubmit, errors } = useForm();
  const date: number = new Date().getFullYear();
  const inputs: IPreviousSeasonInput[] = [
    {
      name: 'finalPosition',
      label: 'Final Position',
      defaultValue: input.finalPosition,
      min: 1,
      max: 50,
      errors: errors.finalPosition,
    },
    {
      name: 'win',
      label: 'Games won',
      defaultValue: input.win,
      errors: errors.win,
    },
    {
      name: 'draw',
      label: 'Games drawn',
      defaultValue: input.draw,
      errors: errors.draw,
    },
    {
      name: 'lose',
      label: 'Games lost',
      defaultValue: input.lose,
      errors: errors.lose,
    },
    {
      name: 'goalsFor',
      label: 'Goals For',
      defaultValue: input.goalsFor,
      max: 999,
      errors: errors.goalsFor,
    },
    {
      name: 'goalsAgainst',
      label: 'Goals Against',
      defaultValue: input.goalsAgainst,
      max: 999,
      errors: errors.goalsAgainst,
    },
  ];
  const editSeasonArea = season ? (
    <>
      <CustomLinkButton
        type='contained'
        link={`${admin_routes.ADMIN_PREVIOUS_SEASON}/${season._id}/awards/add`}
      >
        Add a new award
      </CustomLinkButton>
      <AdminAwardsList season={season} />
      <DeletePrevSeason season={season} />
    </>
  ) : null;

  const submitText: string = season ? 'Update season' : 'Add season';

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CenteredGrid dir='row'>
          <Grid item xs={8}>
            <TextInput
              inputName='seasonName'
              label='Season Name'
              defaultValue={input.seasonName}
              onChange={onChange}
              validators={register({
                required: true,
                maxLength: 30,
                minLength: 2,
              })}
              errors={errors.seasonName || null}
            />
          </Grid>
          <Grid item xs={4}>
            <SelectInput
              inputName='year'
              label='Year'
              defaultValue={input.year}
              onChange={onChange}
              errors={errors.year}
              options={yearOptions(2008, date)}
            />
          </Grid>

          {inputs.map((input) => {
            return (
              <Grid key={input.name} item xs={6} sm={4}>
                <NumberInput
                  inputName={input.name}
                  label={input.label}
                  defaultValue={input.defaultValue}
                  onChange={onChange}
                  validators={register({
                    required: true,
                    min: input.min || 0,
                    max: input.max || 99,
                  })}
                  errors={input.errors}
                />
              </Grid>
            );
          })}
          <SubmitButton loading={loading}>{submitText}</SubmitButton>
        </CenteredGrid>
      </form>
      {editSeasonArea}
    </FormContainer>
  );
};

export default PrevSeasonForm;
