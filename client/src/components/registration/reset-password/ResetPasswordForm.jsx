import React from 'react';
import { useForm } from 'react-hook-form';
// Components
import Spinner from 'components/ui/loading/Spinner';
import SubmitButton from 'components/ui/buttons/SubmitButton';
import TextInput from 'components/ui/inputs/TextInput';
import FormContainer from 'shared/layout/FormContainer';

const ResetPasswordForm = ({ loading, onChange, onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();
  return !loading ? (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          isPassword
          inputName='password'
          label='New Password'
          onChange={onChange}
          validators={register({
            required: true,
            minLength: 6,
          })}
          errors={errors.email || null}
        />
        <SubmitButton>Reset password</SubmitButton>
      </form>
    </FormContainer>
  ) : (
    <Spinner />
  );
};

export default ResetPasswordForm;
