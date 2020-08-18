import React from 'react';
import { admin_routes } from 'router';
import { PageHeader } from 'components/typography';
import EditResult from 'app/admin-result/containers/EditResult.container';
import { page_headers } from 'constants/text';

const EditResultPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title={page_headers.EDIT_RESULT}
        backTo={admin_routes.ADMIN_RESULTS}
      />
      <EditResult />
    </>
  );
};

export default EditResultPage;
