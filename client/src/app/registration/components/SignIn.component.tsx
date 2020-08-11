import React from 'react';
import { useForm } from 'react-hook-form';
import { SubmitButton } from 'components/buttons';
import { TextInput } from 'components/inputs';

interface Props {
  loading: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const SignInForm: React.FC<Props> = ({ loading, onChange, onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        inputName='email'
        label='Email Address'
        onChange={onChange}
        validators={register({
          required: true,
          pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        })}
        errors={errors.email}
      />
      <TextInput
        isPassword={true}
        inputName='password'
        label='Password'
        onChange={onChange}
        validators={register({ required: true })}
      />

      <SubmitButton loading={loading}>Sign in</SubmitButton>
    </form>
  );
};

export default SignInForm;
