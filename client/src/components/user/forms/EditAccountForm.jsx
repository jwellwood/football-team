import React from 'react';
import { useForm } from 'react-hook-form';
// Routes
import { CHANGE_PASSWORD } from 'router/route_names';
// Layout
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import Spinner from 'components/ui/loading/Spinner';
import TextInput from 'components/ui/inputs/TextInput';
import SubmitButton from 'components/ui/buttons/SubmitButton';
// Components
import CustomLinkButton from 'components/ui/buttons/CustomLinkButton';
import DeleteAccountLogic from '../account/DeleteAccountLogic';
import FormContainer from 'containers/FormContainer';
import FormHelper from 'components/ui/text/FormHelper';
import { emailHelper } from 'assets/data/formHelperText';

const EditAccountForm = ({ onChange, onSubmit, loading, input, user }) => {
  const { handleSubmit, errors, register } = useForm();
  const editAccForm = (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormHelper>{emailHelper}</FormHelper>
      <CenteredGrid dir='row'>
        <TextInput
          isEmail={true}
          inputName='email'
          defaultValue={input.email}
          onChange={onChange}
          label='Email'
          validators={register({
            required: true,
            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
          })}
          errors={errors.email || null}
        />
      </CenteredGrid>
      <SubmitButton disabled={user.email === input.email} loading={loading} />
    </form>
  );

  const passwordAndDeleteLinks = (
    <CenteredGrid dir='row' just='space-between'>
      <CustomLinkButton link={CHANGE_PASSWORD} fullWidth={false}>
        Change Password
      </CustomLinkButton>
      <DeleteAccountLogic user={user} />
    </CenteredGrid>
  );

  return !loading ? (
    <FormContainer>
      {editAccForm}
      {passwordAndDeleteLinks}
    </FormContainer>
  ) : (
    <Spinner />
  );
};

export default EditAccountForm;
