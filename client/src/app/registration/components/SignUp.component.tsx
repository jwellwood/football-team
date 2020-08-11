import React from 'react';
import { useForm } from 'react-hook-form';
import { SubmitButton } from 'components/buttons';
import { TextInput, CustomSwitch } from 'components/inputs';

interface Props {
  loading: boolean;
  onSubmit: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  acceptTerms?: boolean;
  onAcceptTermsToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignUpForm: React.FC<Props> = ({
  loading,
  onSubmit,
  onChange,
  disabled,
  acceptTerms,
  onAcceptTermsToggle,
}) => {
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
        errors={errors.name}
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
        errors={errors.email}
      />
      <TextInput
        isPassword={true}
        inputName='password'
        label='Password'
        onChange={onChange}
        validators={register({ required: true, minLength: 6 })}
        errors={errors.password}
      />
      <div style={{ marginLeft: '10px' }}>
        <CustomSwitch
          name='acceptTerms'
          checked={acceptTerms}
          onCheck={onAcceptTermsToggle}
          label='I accept the terms of use'
          placement='end'
        />
      </div>

      <SubmitButton disabled={disabled} loading={loading}>
        Sign up
      </SubmitButton>
    </form>
  );
};

export default SignUpForm;
