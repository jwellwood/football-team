import React from 'react';
import { admin_routes } from 'router';
import PageHeader from 'lib/components/typography/PageHeader';
import EditResultLogic from 'components/admin/results/EditResultLogic';

const EditResultPage = () => {
  return (
    <div>
      <PageHeader title='Edit Result' backTo={admin_routes.ADMIN_RESULTS} />
      <EditResultLogic />
    </div>
  );
};

export default EditResultPage;
