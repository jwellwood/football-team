import React from 'react';
import { user_routes } from 'router';
import PageHeader from 'components/ui/text/PageHeader';
import EditUserImageLogic from 'components/user/forms/EditUserImageLogic';

const EditUserImagePage = () => {
  return (
    <div>
      <PageHeader title='Edit Photo' backTo={user_routes.PROFILE} />
      <EditUserImageLogic />
    </div>
  );
};

export default EditUserImagePage;
