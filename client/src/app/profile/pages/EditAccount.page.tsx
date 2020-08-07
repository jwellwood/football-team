import React from 'react';
import { user_routes } from 'router';
import PageHeader from 'lib/components/typography/PageHeader';
import EditAccount from '../containers/EditAccount.container';

const EditAccountPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Edit Account' backTo={user_routes.PROFILE} />
      <EditAccount />
    </>
  );
};

export default EditAccountPage;
