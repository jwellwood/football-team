import React from 'react';
import { ADMIN } from 'router/route_names';
import PageHeader from 'components/ui/headers/PageHeader';
import AdminResultsListLogic from 'components/admin/results/AdminResultsListLogic';

const AdminResultsPage = () => {
  return (
    <div>
      <PageHeader title='Results' backTo={ADMIN} />
      <AdminResultsListLogic />
    </div>
  );
};

export default AdminResultsPage;
