import React from 'react';
import { user_routes } from 'router';
import PageHeader from 'lib/components/typography/PageHeader';
import EditTargetsLogic from 'components/user/forms/EditTargetsLogic';

const EditTargetsPage = () => {
  return (
    <div>
      <PageHeader title='Edit targets' backTo={user_routes.PROFILE} />
      <EditTargetsLogic />
    </div>
  );
};

export default EditTargetsPage;
