import React from 'react';
import { useForm } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import { FormContainer } from 'shared/layout/containers';
import { CenteredGrid } from 'shared/layout/grids';
import { SubmitButton } from 'components/buttons';
import { TextInput, NumberInput, CustomSwitch } from 'components/inputs';

interface Props {
  loading: boolean;
  onSubmit: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasNumericValue: boolean;
}

interface IAwardInput {
  name: string;
  label: string;
  errors?: any;
}

const AddAwardForm: React.FC<Props> = ({
  loading,
  onSubmit,
  onChange,
  onCheck,
  hasNumericValue,
}) => {
  const { register, handleSubmit, errors } = useForm();

  const inputData: IAwardInput[] = [
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
          {inputData.map((input: IAwardInput) => (
            <Grid key={input.name} item xs={12} sm={6}>
              <TextInput
                inputName={input.name}
                label={input.label}
                onChange={onChange}
                validators={register({ maxLength: 30 })}
                errors={input.errors}
              />
            </Grid>
          ))}

          <Grid item xs={6}>
            <CustomSwitch onCheck={onCheck} label='Numeric?' />
          </Grid>
          <Grid item xs={6}>
            {hasNumericValue ? (
              <NumberInput
                defaultValue={0}
                inputName='awardValue'
                label='Numeric Value'
                onChange={onChange}
                validators={register({ required: true, min: 0, max: 999 })}
                errors={errors.awardValue}
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
