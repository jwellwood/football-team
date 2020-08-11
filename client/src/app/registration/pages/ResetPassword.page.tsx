import React from 'react';
import { reg_routes } from 'router';
import { PageHeader } from 'components/typography';
import ResetPassword from '../containers/ResetPassword.container';

const ResetPasswordPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Reset Password' backTo={reg_routes.SIGN_IN} />
      <ResetPassword />
    </>
  );
};

export default ResetPasswordPage;
