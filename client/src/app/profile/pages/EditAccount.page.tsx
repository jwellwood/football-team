import React from 'react';
import { user_routes } from 'router';
import { PageHeader } from 'components/typography';
import EditAccount from '../containers/EditAccount.container';
import { page_headers } from 'constants/text';

const EditAccountPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title={page_headers.EDIT_ACCOUNT}
        backTo={user_routes.PROFILE}
      />
      <EditAccount />
    </>
  );
};

export default EditAccountPage;
