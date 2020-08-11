import React from 'react';
import { admin_routes } from 'router';
import { PageHeader } from 'components/typography';
import EditResult from 'app/admin-result/containers/EditResult.container';

const EditResultPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Edit Result' backTo={admin_routes.ADMIN_RESULTS} />
      <EditResult />
    </>
  );
};

export default EditResultPage;
