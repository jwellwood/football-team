import React from 'react';
import PageHeader from 'components/ui/text/PageHeader';
import { reg_routes } from 'router';
import ForgotPasswordLogic from 'components/registration/reset-password/ForgotPasswordLogic';

const ForgotPasswordPage = () => {
  return (
    <div>
      <PageHeader title='Forgot Password' link={reg_routes.SIGN_IN} />
      <ForgotPasswordLogic />
    </div>
  );
};

export default ForgotPasswordPage;
