import React from 'react';
import { useForm } from 'react-hook-form';
// Components
import SubmitButton from 'components/ui/buttons/SubmitButton';
import TextInput from 'components/ui/inputs/TextInput';

const SignUpForm = ({ loading, onSubmit, onChange, disabled }) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        inputName='name'
        label='Name'
        onChange={onChange}
        validators={register({
          required: true,
          minLength: 2,
          maxLength: 20,
        })}
        errors={errors.name || null}
      />

      <TextInput
        inputName='email'
        label='Email address'
        onChange={onChange}
        validators={register({
          required: true,
          minLength: 2,
          pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        })}
        errors={errors.email || null}
      />

      <TextInput
        isPassword={true}
        inputName='password'
        label='Password'
        onChange={onChange}
        validators={register({ required: true, minLength: 6 })}
        erros={errors.password || null}
      />

      <SubmitButton disabled={disabled} loading={loading}>
        Sign up
      </SubmitButton>
    </form>
  );
};

export default SignUpForm;
