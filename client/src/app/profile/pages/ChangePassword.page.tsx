import React from 'react';
import { user_routes } from 'router';
import { PageHeader } from 'components/typography';
import ChangePassword from '../containers/ChangePassword.container';
import { page_headers } from 'constants/text';

const ChangePasswordPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title={page_headers.CHANGE_PASSWORD}
        backTo={user_routes.EDIT_USER}
      />
      <ChangePassword />
    </>
  );
};

export default ChangePasswordPage;
