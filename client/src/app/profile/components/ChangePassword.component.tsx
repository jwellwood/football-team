import React from 'react';
import { useForm } from 'react-hook-form';
import { FormContainer } from 'shared/layout/containers';
import {
  currentPasswordHelper,
  newPasswordHelper,
} from 'shared/messages/shared';
import { Spinner } from 'components/loaders';
import { TextInput } from 'components/inputs';
import { SubmitButton } from 'components/buttons';
import { CenteredGrid } from 'shared/layout/grids';
import { IChangePasswordForm } from '../containers/ChangePassword.container';
import { FormHelper } from 'components/typography';

interface Props {
  onSubmitCurrent: () => void;
  onSubmitNew: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  loading: boolean;
  open: boolean;
  input: IChangePasswordForm;
}

const ChangePassword: React.FC<Props> = ({
  onSubmitCurrent,
  onSubmitNew,
  onChange,
  loading,
  open,
  input,
}) => {
  const { handleSubmit, errors, register } = useForm();

  const currentPasswordForm = (
    <form onSubmit={handleSubmit(onSubmitCurrent)}>
      <FormHelper>{currentPasswordHelper}</FormHelper>
      <CenteredGrid dir='column'>
        <TextInput
          isPassword={true}
          inputName='currentPassword'
          label='Current Password'
          onChange={onChange}
          validators={register({ required: true })}
          errors={errors.currentPassword}
        />
      </CenteredGrid>
      <SubmitButton loading={loading}>Submit</SubmitButton>
    </form>
  );

  const disabled: boolean = input.newPassword !== input.confirmPassword;
  const newPasswordForm = (
    <form onSubmit={handleSubmit(onSubmitNew)}>
      <FormHelper>{newPasswordHelper}</FormHelper>
      <CenteredGrid dir='row'>
        <TextInput
          isPassword={true}
          inputName='newPassword'
          label='New Password'
          onChange={onChange}
          validators={register({ required: true, minLength: 6 })}
          errors={errors.newPassword}
        />

        <TextInput
          isPassword={true}
          inputName='confirmPassword'
          label='Confirm New Password'
          onChange={onChange}
          validators={register({ required: true })}
          errors={errors.confirmPassword}
        />
      </CenteredGrid>
      <SubmitButton disabled={disabled} loading={loading}>
        Submit
      </SubmitButton>
    </form>
  );

  return !loading ? (
    <FormContainer>
      {!open ? currentPasswordForm : newPasswordForm}
    </FormContainer>
  ) : (
    <Spinner />
  );
};

export default ChangePassword;
