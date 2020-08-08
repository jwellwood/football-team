import React, { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import FormContainer from 'shared/layout/FormContainer';
import { IUserData } from 'shared/types';
import { targetsFormHelper } from 'shared/messages/shared';
import Spinner from 'lib/components/loading/Spinner';
import NumberInput from 'lib/components/inputs/NumberInput';
import SubmitButton from 'lib/components/buttons/SubmitButton';
import CenteredGrid from 'lib/components/grids/CenteredGrid';
import FormHelper from 'lib/components/typography/FormHelper';
import { IEditTargetForm } from '../containers/EditTargets.container';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  loading: boolean;
  input: IEditTargetForm;
  user: IUserData;
}

interface IEditTargetsInputData {
  name: string;
  label: string;
  defaultValue: number;
  errors: any;
}

const EditTargets: React.FC<Props> = ({
  onChange,
  onSubmit,
  loading,
  input,
  user,
}) => {
  const { appsTarget, goalsTarget, assistsTarget } = user;
  const { handleSubmit, errors, register } = useForm();
  const disabled: boolean =
    +input.appsTarget === +appsTarget &&
    +input.goalsTarget === +goalsTarget &&
    +input.assistsTarget === +assistsTarget;

  const inputData: IEditTargetsInputData[] = [
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

  const targetsForm: ReactElement = (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormHelper>{targetsFormHelper}</FormHelper>
      <CenteredGrid dir='row'>
        {inputData.map((input: IEditTargetsInputData) => (
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

export default EditTargets;
