import React from 'react';
import { PageHeader } from 'components/typography';
import { admin_routes } from 'router';
import AddResult from 'app/admin-result/containers/AddResult.container';

const AddResultPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Add Result' backTo={admin_routes.ADMIN} />
      <AddResult />
    </>
  );
};

export default AddResultPage;
