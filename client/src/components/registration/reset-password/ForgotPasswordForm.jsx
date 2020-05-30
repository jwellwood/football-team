import React from 'react';
import { useForm } from 'react-hook-form';
// Components
import Spinner from 'components/ui/loading/Spinner';
import SubmitButton from 'components/ui/buttons/SubmitButton';
import TextInput from 'components/ui/inputs/TextInput';
import FormContainer from 'containers/FormContainer';

const ForgotPasswordForm = ({ loading, onChange, onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();

  return !loading ? (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          inputName='email'
          label='Email Address'
          onChange={onChange}
          validators={register({
            required: true,
          })}
          errors={errors.email || null}
        />
        <SubmitButton>Send</SubmitButton>
      </form>
    </FormContainer>
  ) : (
    <Spinner />
  );
};

export default ForgotPasswordForm;
