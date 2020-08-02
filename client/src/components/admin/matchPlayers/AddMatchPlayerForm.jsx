import React from 'react';
import { useForm } from 'react-hook-form';
// MUI
import Grid from '@material-ui/core/Grid';
// Data
import { assignPlayerHelper } from 'shared/data/adminHelperText';
// Functions
import { playerOptions } from 'shared/utils/select-options';
// Components
import SelectInput from 'components/ui/inputs/SelectInput';
import NumberInput from 'components/ui/inputs/NumberInput';
import SubmitButton from 'components/ui/buttons/SubmitButton';
import Spinner from 'components/ui/loading/Spinner';
import FormContainer from 'shared/layout/FormContainer';
import CustomSwitch from 'components/ui/inputs/CustomSwitch';
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import FormHelper from 'components/ui/text/FormHelper';
import CustomTypography from 'components/ui/text/CustomTypography';

const AddMatchPlayerForm = ({
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

  const inputData = [
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
    {
      type: 'switch',
      name: 'redCard',
      label: 'Red Card',
      defaultValue: redCard,
    },
    {
      type: 'switch',
      name: 'mvp',
      label: 'MVP',
      defaultValue: mvp,
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
                errors={errors.player_id || null}
                options={playerOptions(result, players)}
              />
            </Grid>
            {inputData.map((input) => (
              <Grid key={input.name} item xs={4} sm={4}>
                {input.type === 'switch' ? (
                  <CustomSwitch
                    name={input.name}
                    defaultValue={input.defaultValue}
                    onCheck={onCheck}
                    label={
                      <CustomTypography size='sm'>
                        {input.label}
                      </CustomTypography>
                    }
                    placement='top'
                  />
                ) : (
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
                    errors={input.errors || null}
                    disabled={input.condition === false}
                  />
                )}
              </Grid>
            ))}
          </CenteredGrid>
          <SubmitButton>Submit</SubmitButton>
        </form>
      ) : (
        <Spinner />
      )}
    </FormContainer>
  );
};

export default AddMatchPlayerForm;
