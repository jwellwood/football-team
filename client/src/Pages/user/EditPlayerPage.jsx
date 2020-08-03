import React from 'react';
import { user_routes } from 'router';
import PageHeader from 'lib/components/typography/PageHeader';
import EditPlayerLogic from 'components/user/forms/EditPlayerLogic';

const EditPlayerPage = () => {
  return (
    <div>
      <PageHeader title='Edit Details' backTo={user_routes.PROFILE} />
      <EditPlayerLogic />
    </div>
  );
};

export default EditPlayerPage;
