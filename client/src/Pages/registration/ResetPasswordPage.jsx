import React from 'react';
import PageHeader from 'components/ui/text/PageHeader';
import { reg_routes } from 'router';
import ResetPasswordLogic from 'components/registration/reset-password/ResetPasswordLogic';

const ResetPasswordPage = () => {
  return (
    <div>
      <PageHeader title='Reset Password' backTo={reg_routes.SIGN_IN} />
      <ResetPasswordLogic />
    </div>
  );
};

export default ResetPasswordPage;
