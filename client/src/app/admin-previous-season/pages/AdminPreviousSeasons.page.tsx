import React from 'react';
import { PageHeader } from 'components/typography';
import { admin_routes } from 'router';
import AdminPreviousSeasonList from '../containers/AdminPreviousSeasonList.container';
import { page_headers } from 'constants/text';

const AdminPreviousSeasonsPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title={page_headers.ADMIN_SEASON}
        backTo={admin_routes.ADMIN}
      />
      <AdminPreviousSeasonList />
    </>
  );
};

export default AdminPreviousSeasonsPage;
