import React from 'react';
import { useForm } from 'react-hook-form';
import FormContainer from 'shared/layout/FormContainer';
import { passwordFormHelper } from 'shared/messages/shared';
import Spinner from 'lib/components/loading/Spinner';
import SubmitButton from 'lib/components/buttons/SubmitButton';
import TextInput from 'lib/components/inputs/TextInput';
import FormHelper from 'lib/components/typography/FormHelper';

interface Props {
  loading: boolean;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const ForgotPassword: React.FC<Props> = ({ loading, onChange, onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();

  return !loading ? (
    <FormContainer>
      <FormHelper>{passwordFormHelper}</FormHelper>
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

export default ForgotPassword;
