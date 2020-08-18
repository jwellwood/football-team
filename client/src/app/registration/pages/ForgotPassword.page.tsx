import React from 'react';
import { reg_routes } from 'router';
import { PageHeader } from 'components/typography';
import ForgotPassword from '../containers/ForgotPassword.container';
import { page_headers } from 'constants/text';

const ForgotPasswordPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title={page_headers.FORGOT_PASSWORD}
        backTo={reg_routes.SIGN_IN}
      />
      <ForgotPassword />
    </>
  );
};

export default ForgotPasswordPage;
