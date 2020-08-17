import React from 'react';
import { PageHeader } from 'components/typography';
import { admin_routes } from 'router';
import AdminPreviousSeasonList from '../containers/AdminPreviousSeasonList.container';

const AdminPreviousSeasonsPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Previous Seasons' backTo={admin_routes.ADMIN} />
      <AdminPreviousSeasonList />
    </>
  );
};

export default AdminPreviousSeasonsPage;
