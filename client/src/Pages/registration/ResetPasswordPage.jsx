import React from 'react';
import PageHeader from 'components/ui/text/PageHeader';
import { SIGN_IN } from 'router/route_names';
import ResetPasswordLogic from 'components/registration/reset-password/ResetPasswordLogic';

const ResetPasswordPage = () => {
  return (
    <div>
      <PageHeader title='Reset Password' backTo={SIGN_IN} />
      <ResetPasswordLogic />
    </div>
  );
};

export default ResetPasswordPage;
