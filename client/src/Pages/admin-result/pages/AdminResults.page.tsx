import React from 'react';
import { admin_routes } from 'router';
import PageHeader from 'lib/components/typography/PageHeader';
import AdminResultsListLogic from 'Pages/admin-result/AdminResultsListLogic';

const AdminResultsPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Results' backTo={admin_routes.ADMIN} />
      <AdminResultsListLogic />
    </>
  );
};

export default AdminResultsPage;
