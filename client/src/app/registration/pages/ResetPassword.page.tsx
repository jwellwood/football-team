import React from 'react';
import { reg_routes } from 'router';
import { PageHeader } from 'components/typography';
import ResetPassword from '../containers/ResetPassword.container';
import { page_headers } from 'constants/text';

const ResetPasswordPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title={page_headers.RESET_PASSWORD}
        backTo={reg_routes.SIGN_IN}
      />
      <ResetPassword />
    </>
  );
};

export default ResetPasswordPage;
