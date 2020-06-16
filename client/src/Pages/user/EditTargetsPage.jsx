import React from 'react';
import { PROFILE } from 'router/route_names';
import PageHeader from 'components/ui/text/PageHeader';
import EditTargetsLogic from 'components/user/forms/EditTargetsLogic';

const EditTargetsPage = () => {
  return (
    <div>
      <PageHeader title='Edit targets' backTo={PROFILE} />
      <EditTargetsLogic />
    </div>
  );
};

export default EditTargetsPage;
