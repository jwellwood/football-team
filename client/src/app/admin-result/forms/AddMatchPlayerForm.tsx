import React from 'react';
import { useForm } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import { assignPlayerHelper, button_text } from 'constants/text';
import { IResult, IPlayer, IResultPlayerStats } from 'shared/types';
import { NumberInput, SelectInput, CustomSwitch } from 'components/inputs';
import { SubmitButton } from 'components/buttons';
import { Spinner } from 'components/loaders';
import { FormContainer } from 'shared/layout/containers';
import { CenteredGrid } from 'shared/layout/grids';
import { CustomTypography, FormHelper } from 'components/typography';
import { matchPlayerOptions } from '../utils';

interface Props {
  loading: boolean;
  onSubmit: () => void;
  onCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  result: IResult;
  input: IResultPlayerStats;
  players: IPlayer[];
}

interface IMatchPlayerInputData {
  type?: string;
  name: string;
  label: string;
  defaultValue: number;
  errors?: any;
  condition?: boolean;
}

const AddMatchPlayerForm: React.FC<Props> = ({
  loading,
  onSubmit,
  onCheck,
  onChange,
  result,
  input,
  players,
}) => {
  const { register, handleSubmit, errors } = useForm();
  const { opponentName, teamGoals, opponentGoals } = result;
  const {
    goals,
    assists,
    mvp,
    conceded,
    ownGoals,
    pensScored,
    pensMissed,
    redCard,
    yellowCards,
  } = input;

  const switchesData = [
    {
      name: 'redCard',
      label: 'Red Card',
      defaultValue: redCard,
    },
    {
      name: 'mvp',
      label: 'MVP',
      defaultValue: mvp,
    },
  ];

  const inputData: IMatchPlayerInputData[] = [
    {
      name: 'goals',
      label: 'Goals',
      defaultValue: goals,
      errors: errors.goals,
    },
    {
      name: 'assists',
      label: 'Assists',
      defaultValue: assists,
      errors: errors.assists,
    },
    {
      name: 'pensScored',
      label: 'Pens Scored',
      defaultValue: pensScored,
      errors: errors.pensScored,
      condition: input.goals > 0,
    },
    {
      name: 'conceded',
      label: 'Conceded',
      defaultValue: conceded,
      errors: errors.conceded,
    },
    {
      name: 'ownGoals',
      label: 'Own Goals',
      defaultValue: ownGoals,
      errors: errors.ownGoals,
    },
    {
      name: 'pensMissed',
      label: 'Pens Missed',
      defaultValue: pensMissed,
      errors: errors.pensMissed,
    },
    {
      name: 'yellowCards',
      label: 'Yellow Cards',
      defaultValue: yellowCards,
      errors: errors.yellowCards,
    },
  ];

  return (
    <FormContainer>
      <CustomTypography bold>
        {opponentName}, {teamGoals} - {opponentGoals}
      </CustomTypography>
      {!loading ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormHelper>{assignPlayerHelper}</FormHelper>
          <CenteredGrid dir='row'>
            <Grid item xs={12} sm={12}>
              <SelectInput
                inputName='player_id'
                label='Name'
                onChange={onChange}
                validators={register({ required: true })}
                errors={errors.player_id}
                options={matchPlayerOptions(result, players)}
              />
            </Grid>
            {switchesData.map((input) => (
              <Grid key={input.name} item xs={4} sm={4}>
                <CustomSwitch
                  name={input.name}
                  defaultValue={input.defaultValue}
                  onCheck={onCheck}
                  label={
                    <CustomTypography size='sm'>{input.label}</CustomTypography>
                  }
                  placement='top'
                />
              </Grid>
            ))}
            {inputData.map((input) => (
              <Grid key={input.name} item xs={4} sm={4}>
                <NumberInput
                  inputName={input.name}
                  defaultValue={input.defaultValue}
                  label={input.label}
                  onChange={onChange}
                  validators={register({
                    required: true,
                    min: 0,
                    max: 99,
                  })}
                  errors={input.errors}
                  disabled={input.condition === false}
                />
              </Grid>
            ))}
          </CenteredGrid>
          <SubmitButton>{button_text.ADD}</SubmitButton>
        </form>
      ) : (
        <Spinner />
      )}
    </FormContainer>
  );
};

export default AddMatchPlayerForm;
