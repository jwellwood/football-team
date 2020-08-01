import React from 'react';
import { user_routes } from 'router';
import PageHeader from 'components/ui/text/PageHeader';
import EditAccountLogic from 'components/user/forms/EditAccountLogic';

const EditAccountPage = () => {
  return (
    <div>
      <PageHeader title='Edit Account' backTo={user_routes.PROFILE} />
      <EditAccountLogic />
    </div>
  );
};

export default EditAccountPage;
