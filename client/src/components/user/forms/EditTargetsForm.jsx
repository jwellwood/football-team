import React from 'react';
import { useForm } from 'react-hook-form';
// Internal
import Spinner from 'components/ui/loading/Spinner';
import NumberInput from 'components/ui/inputs/NumberInput';
import SubmitButton from 'components/ui/buttons/SubmitButton';
import FormContainer from 'shared/layout/FormContainer';
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import FormHelper from 'components/ui/text/FormHelper';
import { targetsFormHelper } from 'shared/data/formHelperText';

const EditTargetsForm = ({ onChange, onSubmit, loading, input, user }) => {
  const { appsTarget, goalsTarget, assistsTarget } = user;
  const { handleSubmit, errors, register } = useForm();
  const disabled =
    +input.appsTarget === +appsTarget &&
    +input.goalsTarget === +goalsTarget &&
    +input.assistsTarget === +assistsTarget;

  const inputData = [
    {
      name: 'appsTarget',
      label: 'Target Apps',
      defaultValue: input.appsTarget,
      errors: errors.appsTarget,
    },
    {
      name: 'goalsTarget',
      label: 'Target Goals',
      defaultValue: input.goalsTarget,
      errors: errors.goalsTarget,
    },
    {
      name: 'assistsTarget',
      label: 'Target Assists',
      defaultValue: input.assistsTarget,
      errors: errors.assistsTarget,
    },
  ];

  const targetsForm = (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormHelper>{targetsFormHelper}</FormHelper>
      <CenteredGrid dir='row'>
        {inputData.map((input) => (
          <NumberInput
            key={input.name}
            inputName={input.name}
            defaultValue={input.defaultValue}
            onChange={onChange}
            label={input.label}
            validators={register({ required: true, min: 0, max: 99 })}
            errors={input.errors || null}
          />
        ))}
      </CenteredGrid>
      <SubmitButton disabled={disabled} loading={loading} />
    </form>
  );

  return !loading ? <FormContainer>{targetsForm}</FormContainer> : <Spinner />;
};

export default EditTargetsForm;
