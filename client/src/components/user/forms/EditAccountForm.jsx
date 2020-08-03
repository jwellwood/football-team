import React from 'react';
import { useForm } from 'react-hook-form';
// Routes
import { user_routes } from 'router';
// Layout
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import Spinner from 'components/ui/loading/Spinner';
import TextInput from 'lib/components/inputs/TextInput';
import SubmitButton from 'lib/components/buttons/SubmitButton';
// Components
import CustomLinkButton from 'lib/components/buttons/CustomLinkButton';
import DeleteAccountLogic from '../account/DeleteAccountLogic';
import FormContainer from 'shared/layout/FormContainer';
import FormHelper from 'components/ui/text/FormHelper';
import { emailHelper } from 'shared/data/formHelperText';

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
      <CustomLinkButton link={user_routes.CHANGE_PASSWORD} fullWidth={false}>
        Change Password
      </CustomLinkButton>
      {!user.matchesPlayed.length ? (
        <DeleteAccountLogic user={user} disabled={user.matchesPlayed.length} />
      ) : null}
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
