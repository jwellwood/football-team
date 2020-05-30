import React from 'react';
import PageHeader from 'components/ui/headers/PageHeader';
import { SIGN_IN } from 'router/route_names';
import ForgotPasswordLogic from 'components/registration/reset-password/ForgotPasswordLogic';

const ForgotPasswordPage = () => {
  return (
    <div>
      <PageHeader title='Forgot Password' link={SIGN_IN} />
      <ForgotPasswordLogic />
    </div>
  );
};

export default ForgotPasswordPage;
