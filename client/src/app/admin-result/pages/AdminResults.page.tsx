import React from 'react';
import { admin_routes } from 'router';
import PageHeader from 'lib/components/typography/PageHeader';
import AdminResultsList from '../containers/AdminResultsList.container';

const AdminResultsPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Results' backTo={admin_routes.ADMIN} />
      <AdminResultsList />
    </>
  );
};

export default AdminResultsPage;