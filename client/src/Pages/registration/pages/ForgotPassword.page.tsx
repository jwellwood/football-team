import React from 'react';
import { reg_routes } from 'router';
import PageHeader from 'lib/components/typography/PageHeader';
import ForgotPassword from '../containers/ForgotPassword.container';

const ForgotPasswordPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Forgot Password' backTo={reg_routes.SIGN_IN} />
      <ForgotPassword />
    </>
  );
};

export default ForgotPasswordPage;
