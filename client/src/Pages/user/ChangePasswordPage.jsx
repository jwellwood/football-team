import React from 'react';
import { EDIT_USER } from 'router/route_names';
import PageHeader from 'components/ui/headers/PageHeader';
import ChangePasswordLogic from 'components/user/forms/ChangePasswordLogic';

const ChangePasswordPage = () => {
  return (
    <>
      <PageHeader title='Change Password' backTo={EDIT_USER} />
      <ChangePasswordLogic />
    </>
  );
};

export default ChangePasswordPage;
