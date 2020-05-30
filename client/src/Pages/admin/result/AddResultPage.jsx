import React from 'react';
import PageHeader from 'components/ui/headers/PageHeader';
import { ADMIN } from 'router/route_names';
import AddResultLogic from 'components/admin/results/AddResultLogic';

const AddResultPage = () => {
  return (
    <div>
      <PageHeader title='Add Result' backTo={ADMIN} />
      <AddResultLogic />
    </div>
  );
};

export default AddResultPage;
