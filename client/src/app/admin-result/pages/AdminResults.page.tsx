import React from 'react';
import { admin_routes } from 'router';
import { PageHeader } from 'components/typography';
import AdminResultsList from '../containers/AdminResultsList.container';
import { page_headers } from 'constants/text';

const AdminResultsPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title={page_headers.ADMIN_RESULTS}
        backTo={admin_routes.ADMIN}
      />
      <AdminResultsList />
    </>
  );
};

export default AdminResultsPage;
