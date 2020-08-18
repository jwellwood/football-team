import React from 'react';
import { PageHeader } from 'components/typography';
import { admin_routes } from 'router';
import AddResult from 'app/admin-result/containers/AddResult.container';
import { page_headers } from 'constants/text';

const AddResultPage: React.FC = () => {
  return (
    <>
      <PageHeader title={page_headers.ADD_RESULT} backTo={admin_routes.ADMIN} />
      <AddResult />
    </>
  );
};

export default AddResultPage;
