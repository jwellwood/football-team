import React from 'react';
import { admin_routes } from 'router';
import PageHeader from 'components/ui/text/PageHeader';
import AdminResultsListLogic from 'components/admin/results/AdminResultsListLogic';

const AdminResultsPage = () => {
  return (
    <div>
      <PageHeader title='Results' backTo={admin_routes.ADMIN} />
      <AdminResultsListLogic />
    </div>
  );
};

export default AdminResultsPage;
