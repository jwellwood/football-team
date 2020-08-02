import React from 'react';
import { useForm } from 'react-hook-form';
// Components
import Spinner from 'components/ui/loading/Spinner';
import FormContainer from 'shared/layout/FormContainer';
import TextInput from 'components/ui/inputs/TextInput';
import SubmitButton from 'components/ui/buttons/SubmitButton';
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import {
  currentPasswordHelper,
  newPasswordHelper,
} from 'shared/data/formHelperText';
import FormHelper from 'components/ui/text/FormHelper';

const ChangePasswordForm = ({
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
      <CenteredGrid container direction='column'>
        <TextInput
          isPassword={true}
          inputName='currentPassword'
          label='Current Password'
          onChange={onChange}
          validators={register({ required: true })}
          errors={errors.currentPassword || null}
        />
      </CenteredGrid>
      <SubmitButton loading={loading}>Submit</SubmitButton>
    </form>
  );

  const disabled = input.newPassword !== input.confirmPassword;
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
          errors={errors.newPassword || null}
        />

        <TextInput
          isPassword={true}
          inputName='confirmPassword'
          label='Confirm New Password'
          onChange={onChange}
          validators={register({ required: true })}
          errors={errors.confirmPassword || null}
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

export default ChangePasswordForm;
