import React from 'react';
import { ADMIN_RESULTS } from 'router/route_names';
import PageHeader from 'components/ui/headers/PageHeader';
import EditResultLogic from 'components/admin/results/EditResultLogic';

const EditResultPage = () => {
  return (
    <div>
      <PageHeader title='Edit Result' backTo={ADMIN_RESULTS} />
      <EditResultLogic />
    </div>
  );
};

export default EditResultPage;
