import React, { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { user_routes } from 'router';
import { FormContainer } from 'shared/layout/containers';
import { emailHelper } from 'shared/messages/shared';
import { IUserData } from 'shared/types';
import { CenteredGrid } from 'shared/layout/grids';
import { Spinner } from 'components/loaders';
import { TextInput } from 'components/inputs';
import { SubmitButton } from 'components/buttons';
import { CustomLinkButton } from 'components/buttons';
import DeleteAccount from '../containers/DeleteAccount.container';
import { IEditAccountForm } from '../containers/EditAccount.container';
import { FormHelper } from 'components/typography';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  loading: boolean;
  input: IEditAccountForm;
  user: IUserData;
}
const EditAccountForm: React.FC<Props> = ({
  onChange,
  onSubmit,
  loading,
  input,
  user,
}) => {
  const { handleSubmit, errors, register } = useForm();

  const editAccForm: ReactElement = (
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
          errors={errors.email}
        />
      </CenteredGrid>
      <SubmitButton disabled={user.email === input.email} loading={loading} />
    </form>
  );

  const passwordAndDeleteLinks: ReactElement = (
    <CenteredGrid dir='row' just='space-between'>
      <CustomLinkButton link={user_routes.CHANGE_PASSWORD}>
        Change Password
      </CustomLinkButton>
      {!user.matchesPlayed.length ? <DeleteAccount /> : null}
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
