import React from 'react';
import { useForm } from 'react-hook-form';
import SubmitButton from 'lib/components/buttons/SubmitButton';
import TextInput from 'lib/components/inputs/TextInput';

interface Props {
  loading: boolean;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
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
        errors={errors.email || null}
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
