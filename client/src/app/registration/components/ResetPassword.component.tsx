import React from 'react';
import { useForm } from 'react-hook-form';
import FormContainer from 'shared/layout/FormContainer';
import Spinner from 'lib/components/loading/Spinner';
import SubmitButton from 'lib/components/buttons/SubmitButton';
import TextInput from 'lib/components/inputs/TextInput';

interface Props {
  loading: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const ResetPassword: React.FC<Props> = ({ loading, onChange, onSubmit }) => {
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

export default ResetPassword;
