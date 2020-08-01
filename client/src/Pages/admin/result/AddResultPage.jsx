import React from 'react';
import PageHeader from 'components/ui/text/PageHeader';
import { admin_routes } from 'router';
import AddResultLogic from 'components/admin/results/AddResultLogic';

const AddResultPage = () => {
  return (
    <div>
      <PageHeader title='Add Result' backTo={admin_routes.ADMIN} />
      <AddResultLogic />
    </div>
  );
};

export default AddResultPage;
