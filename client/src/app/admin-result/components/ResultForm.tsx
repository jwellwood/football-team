import React, { lazy, ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import Grid, { GridSize } from '@material-ui/core/Grid';
import {
  matchTypeOptions,
  homeOrAwayOptions,
  forfeitOptions,
} from 'shared/utils/select-options';
import { admin_routes } from 'router';
import FormContainer from 'shared/layout/FormContainer';
import { addResultHelper } from 'shared/data/adminHelperText';
import { IResultInput } from '../shared/types';
import { IResult } from 'shared/types';
import SelectInput from 'lib/components/inputs/SelectInput';
import TextInput from 'lib/components/inputs/TextInput';
import NumberInput from 'lib/components/inputs/NumberInput';
import SubmitButton from 'lib/components/buttons/SubmitButton';
import CustomSwitch from 'lib/components/inputs/CustomSwitch';
import CenteredGrid from 'lib/components/grids/CenteredGrid';
import Spinner from 'lib/components/loading/Spinner';
import AdminMatchPlayersList from './AdminMatchPlayersList.component';
import DeleteResult from '../containers/DeleteResult.container';
import CustomLinkButton from 'lib/components/buttons/CustomLinkButton';
import FormHelper from 'lib/components/typography/FormHelper';
const DateInput = lazy(() => import('lib/components/inputs/DateInput'));

interface Props {
  input: IResultInput;
  result?: IResult;
  loading: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedDate: string | Date;
  setSelectedDate: any; // TODO
}

interface ISelectInputData {
  type?: string;
  name: string;
  label: string;
  defaultValue: string | boolean;
  options?: any; // TODO
  errors?: any;
  checked?: boolean;
  disabled?: boolean;
  condition?: boolean;
  size?: GridSize;
  smSize?: GridSize;
}

interface INumberInputData {
  name: string;
  label: string;
  defaultValue: number;
  errors?: any;
}

const ResultForm: React.FC<Props> = ({
  input,
  result,
  loading,
  onChange,
  onSubmit,
  onCheck,
  selectedDate,
  setSelectedDate,
}) => {
  const { register, handleSubmit, errors } = useForm();

  const selectInputData: ISelectInputData[] = [
    {
      name: 'type',
      label: 'Match Type',
      defaultValue: input.type ? input.type : '',
      options: matchTypeOptions,
      errors: errors.type,
    },
    {
      name: 'isHome',
      label: 'Home / Away',
      defaultValue: input.isHome,
      options: homeOrAwayOptions,
      errors: errors.isHome,
    },
    {
      type: 'switch',
      name: 'isForfeit',
      label: 'Forfeit',
      defaultValue: input.isForfeit || false,
      checked: input.isForfeit || false,
      errors: errors.isForfeit,
      disabled: result && result.players.length ? true : false,
    },
    {
      name: 'isOwnForfeit',
      label: 'Forfeit Status',
      errors: errors.isOwnForfeit,
      defaultValue: input.isOwnForfeit,
      condition: input.isForfeit || false,
      options: forfeitOptions,
      size: 12,
      smSize: 8,
    },
  ];

  const numberInputData: INumberInputData[] = [
    {
      name: 'teamGoals',
      label: 'Goals For',
      defaultValue: input.teamGoals || 0,
      errors: errors.teamGoals,
    },
    {
      name: 'opponentGoals',
      label: 'Goals Against',
      defaultValue: input.opponentGoals || 0,
      errors: errors.opponentGoals,
    },
  ];

  const submitText: string = result ? 'Update result' : 'Add result';

  const editResultArea: ReactElement = result ? (
    <>
      {input.isForfeit || !result ? null : (
        <CustomLinkButton
          type='contained'
          link={`${admin_routes.ADMIN}/results/${result._id}/players/add`}
        >
          Assign Players
        </CustomLinkButton>
      )}
      <AdminMatchPlayersList matchPlayers={result.players} result={result} />
      <DeleteResult result={result} />
    </>
  ) : null;

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
              errors={errors.opponentName || null}
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <DateInput
              inputName='date'
              label='Date'
              defaultValue={selectedDate}
              onChange={setSelectedDate}
              validators={register({ required: true })}
              errors={errors.date || null}
            />
          </Grid>
          {selectInputData.map((input) => (
            <Grid
              key={input.name}
              item
              xs={input.size || 6}
              sm={input.smSize || 4}
            >
              {input.type === 'switch' ? (
                <CustomSwitch
                  name={input.name}
                  defaultValue={input.defaultValue}
                  onCheck={onCheck}
                  label={input.label}
                  checked={input.checked}
                  disabled={input.disabled}
                />
              ) : input.condition !== false ? (
                <SelectInput
                  inputName={input.name}
                  defaultValue={input.defaultValue}
                  label={input.label}
                  onChange={onChange}
                  validators={register({ required: true })}
                  errors={input.errors || null}
                  options={input.options}
                />
              ) : null}
            </Grid>
          ))}
          {numberInputData.map((input) => (
            <Grid key={input.name} item xs={6} sm={6}>
              <NumberInput
                inputName={input.name}
                label={input.label}
                onChange={onChange}
                defaultValue={input.defaultValue}
                validators={register({ required: true, min: 0, max: 99 })}
                errors={input.errors || null}
              />
            </Grid>
          ))}

          <Grid item xs={12}>
            <TextInput
              inputName='matchReport'
              label='Match Report'
              defaultValue={input.matchReport || ''}
              onChange={onChange}
              validators={register({ maxLength: 999 })}
              errors={errors.matchReport || null}
            />
          </Grid>
        </CenteredGrid>
        <SubmitButton loading={loading}>{submitText}</SubmitButton>
      </form>
      {editResultArea}
    </FormContainer>
  ) : (
    <Spinner />
  );
};

export default ResultForm;
