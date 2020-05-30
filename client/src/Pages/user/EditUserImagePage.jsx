import React from 'react';
import { PROFILE } from 'router/route_names';
import PageHeader from 'components/ui/headers/PageHeader';
import EditUserImageLogic from 'components/user/forms/EditUserImageLogic';

const EditUserImagePage = () => {
  return (
    <div>
      <PageHeader title='Edit Photo' backTo={PROFILE} />
      <EditUserImageLogic />
    </div>
  );
};

export default EditUserImagePage;
