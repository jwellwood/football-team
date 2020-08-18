import React from 'react';
import { useForm } from 'react-hook-form';
import { FormContainer } from 'shared/layout/containers';
import { passwordFormHelper } from 'constants/text';
import { Spinner } from 'components/loaders';
import { SubmitButton } from 'components/buttons';
import { TextInput } from 'components/inputs';
import { FormHelper } from 'components/typography';

interface Props {
  loading: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
          errors={errors.email}
        />
        <SubmitButton>Send</SubmitButton>
      </form>
    </FormContainer>
  ) : (
    <Spinner />
  );
};

export default ForgotPassword;
