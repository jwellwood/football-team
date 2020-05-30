import React from 'react';
import { useForm } from 'react-hook-form';
//MUI
import Grid from '@material-ui/core/Grid';
// Options
import { trophyWinnerOptions } from 'components/utils/select-options';
// Internal
import SubmitButton from 'components/ui/buttons/SubmitButton';
import TextInput from 'components/ui/inputs/TextInput';
import SelectInput from 'components/ui/inputs/SelectInput';
import NumberInput from 'components/ui/inputs/NumberInput';
import FormContainer from 'containers/FormContainer';
import CustomSwitch from 'components/ui/inputs/CustomSwitch';
import CenteredGrid from 'components/ui/grids/CenteredGrid';

const AddTrophyForm = ({ onSubmit, onChange, input, loading, onCheck }) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CenteredGrid dir='row'>
          <Grid item xs={12} sm={6}>
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
          <Grid item xs={12} sm={6}>
            <NumberInput
              inputName='year'
              label='Year'
              defaultValue={input.year}
              onChange={onChange}
              validators={register({ required: true, min: 2000, max: 2100 })}
              errors={errors.year || null}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectInput
              inputName='isWinner'
              defaultValue={input.isWinner}
              label='Place'
              onChange={onChange}
              validators={register({ required: true })}
              errors={errors.isWinner || null}
              options={trophyWinnerOptions}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomSwitch
              name='isFinal'
              color='primary'
              defaultValue={input.isFinal}
              onCheck={onCheck}
              label='Cup Final'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {input.isFinal ? (
              <TextInput
                inputName='opponent'
                label='Vs'
                defaultValue={input.opponent}
                onChange={onChange}
                validators={register({
                  required: true,
                  minLength: 2,
                  maxLength: 30,
                })}
                errors={errors.opponent || null}
              />
            ) : null}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextInput
              inputName='description'
              label='Comments'
              defaultValue={input.description}
              onChange={onChange}
              validators={register({ maxLength: 999 })}
              errors={errors.description || null}
            />
          </Grid>
        </CenteredGrid>
        <SubmitButton loading={loading}>Add trophy</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default AddTrophyForm;
