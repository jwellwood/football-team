import React from 'react';
import { user_routes } from 'router';
import { PageHeader } from 'components/typography';
import ChangePassword from '../containers/ChangePassword.container';

const ChangePasswordPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Change Password' backTo={user_routes.EDIT_USER} />
      <ChangePassword />
    </>
  );
};

export default ChangePasswordPage;
