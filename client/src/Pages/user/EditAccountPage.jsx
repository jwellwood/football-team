import React from 'react';
import { PROFILE } from 'router/route_names';
import PageHeader from 'components/ui/text/PageHeader';
import EditAccountLogic from 'components/user/forms/EditAccountLogic';

const EditAccountPage = () => {
  return (
    <div>
      <PageHeader title='Edit Account' backTo={PROFILE} />
      <EditAccountLogic />
    </div>
  );
};

export default EditAccountPage;
