import React from 'react';
import { useForm } from 'react-hook-form';
// MUI
import Grid from '@material-ui/core/Grid';
// Components
import FormContainer from 'shared/layout/FormContainer';
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import NumberInput from 'components/ui/inputs/NumberInput';
import SubmitButton from 'lib/components/buttons/SubmitButton';
import CustomSwitch from 'lib/components/inputs/CustomSwitch';
import TextInput from 'lib/components/inputs/TextInput';

const AddAwardForm = ({
  loading,
  onSubmit,
  onChange,
  onCheck,
  hasNumericValue,
}) => {
  const { register, handleSubmit, errors } = useForm();

  const inputData = [
    { name: 'awardName', label: 'Name of Award', errors: errors.awardName },
    {
      name: 'awardWinner',
      label: 'Name of Winner',
      errors: errors.awardWinner,
    },
  ];
  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CenteredGrid dir='row'>
          {inputData.map((input) => (
            <Grid key={input.name} item xs={12} sm={6}>
              <TextInput
                inputName={input.name}
                label={input.label}
                onChange={onChange}
                validators={register({ maxLength: 30 })}
                errors={input.errors || null}
              />
            </Grid>
          ))}

          <Grid item xs={6}>
            <CustomSwitch onCheck={onCheck} label='Numeric?' />
          </Grid>
          <Grid item xs={6}>
            {hasNumericValue ? (
              <NumberInput
                inputName='awardValue'
                label='Numeric Value'
                onChange={onChange}
                validators={register({ required: true, min: 0, max: 999 })}
                errors={errors.awardValue || null}
              />
            ) : null}
          </Grid>
          <SubmitButton loading={loading}>Add Award</SubmitButton>
        </CenteredGrid>
      </form>
    </FormContainer>
  );
};

export default AddAwardForm;
