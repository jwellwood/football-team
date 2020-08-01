import React from 'react';
import { user_routes } from 'router';
import PageHeader from 'components/ui/text/PageHeader';
import ChangePasswordLogic from 'components/user/forms/ChangePasswordLogic';

const ChangePasswordPage = () => {
  return (
    <>
      <PageHeader title='Change Password' backTo={user_routes.EDIT_USER} />
      <ChangePasswordLogic />
    </>
  );
};

export default ChangePasswordPage;
