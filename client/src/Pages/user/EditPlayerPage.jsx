import React from 'react';
import { PROFILE } from 'router/route_names';
import PageHeader from 'components/ui/text/PageHeader';
import EditPlayerLogic from 'components/user/forms/EditPlayerLogic';

const EditPlayerPage = () => {
  return (
    <div>
      <PageHeader title='Edit Details' backTo={PROFILE} />
      <EditPlayerLogic />
    </div>
  );
};

export default EditPlayerPage;
