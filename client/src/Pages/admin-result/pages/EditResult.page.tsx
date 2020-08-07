import React from 'react';
import { admin_routes } from 'router';
import PageHeader from 'lib/components/typography/PageHeader';
import EditResultLogic from 'Pages/admin-result/EditResultLogic';

const EditResultPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Edit Result' backTo={admin_routes.ADMIN_RESULTS} />
      <EditResultLogic />
    </>
  );
};

export default EditResultPage;
