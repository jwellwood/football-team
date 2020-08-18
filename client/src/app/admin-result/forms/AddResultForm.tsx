import React from 'react';
import { useForm } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import { FormContainer } from 'shared/layout/containers';
import { addResultHelper, button_text } from 'constants/text';
import { IResultInput } from '../shared/types';
import { IResult } from 'shared/types';
import {
  TextInput,
  NumberInput,
  SelectInput,
  CustomSwitch,
  DateInput,
} from 'components/inputs';
import { SubmitButton } from 'components/buttons';
import { CenteredGrid } from 'shared/layout/grids';
import { Spinner } from 'components/loaders';
import { FormHelper } from 'components/typography';
import { matchTypeOptions, homeOrAwayOptions, forfeitOptions } from '../utils';

interface Props {
  input: IResultInput;
  result?: IResult;
  loading: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  selectedDate: string | Date;
  setSelectedDate: any; // TODO
}

const AddResultForm: React.FC<Props> = ({
  input,
  loading,
  onChange,
  onSubmit,
  onCheck,
  selectedDate,
  setSelectedDate,
}) => {
  const { register, handleSubmit, errors } = useForm();

  return !loading ? (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormHelper>{addResultHelper}</FormHelper>
        <CenteredGrid dir='row'>
          <Grid item xs={12}>
            <TextInput
              inputName='opponentName'
              label='Opponent'
              defaultValue={input.opponentName || ''}
              onChange={onChange}
              validators={register({
                required: true,
                maxLength: 30,
                minLength: 2,
              })}
              errors={errors.opponentName}
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <DateInput
              inputName='date'
              label='Date'
              defaultValue={selectedDate}
              onChange={setSelectedDate}
              validators={register({ required: true })}
              errors={errors.date}
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <SelectInput
              inputName='type'
              label='Match Type'
              options={matchTypeOptions}
              onChange={onChange}
              validators={register({ required: true })}
              errors={errors.type}
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <SelectInput
              inputName='isHome'
              label='Home / Away'
              options={homeOrAwayOptions}
              onChange={onChange}
              validators={register({ required: true })}
              errors={errors.isHome}
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <CustomSwitch
              name='isForfeit'
              label='Forfeit'
              checked={input.isForfeit}
              onCheck={onCheck}
            />
          </Grid>
          {input.isForfeit ? (
            <Grid item xs={12} sm={8}>
              <SelectInput
                inputName='isOwnForfeit'
                label='Forfeit Status'
                validators={register({ required: true })}
                errors={errors.isOwnForfeit}
                onChange={onChange}
                options={forfeitOptions}
              />
            </Grid>
          ) : null}
          <Grid item xs={6} sm={6}>
            <NumberInput
              inputName='teamGoals'
              label='Goals For'
              onChange={onChange}
              defaultValue={0}
              validators={register({ required: true, min: 0, max: 99 })}
              errors={errors.teamGoals}
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <NumberInput
              inputName='opponentGoals'
              label='Goals Against'
              onChange={onChange}
              defaultValue={0}
              validators={register({ required: true, min: 0, max: 99 })}
              errors={errors.opponentGoals}
            />
          </Grid>
          <Grid item xs={12}>
            <TextInput
              inputName='matchReport'
              label='Match Report'
              onChange={onChange}
              validators={register({ maxLength: 999 })}
              errors={errors.matchReport}
            />
          </Grid>
        </CenteredGrid>
        <SubmitButton loading={loading}>{button_text.ADD}</SubmitButton>
      </form>
    </FormContainer>
  ) : (
    <Spinner />
  );
};

export default AddResultForm;
