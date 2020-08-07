import React from 'react';
import PageHeader from 'lib/components/typography/PageHeader';
import { admin_routes } from 'router';
import AddResultLogic from 'Pages/admin-result/AddResultLogic';

const AddResultPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Add Result' backTo={admin_routes.ADMIN} />
      <AddResultLogic />
    </>
  );
};

export default AddResultPage;
