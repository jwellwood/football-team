import React from 'react';
import PageHeader from 'components/ui/text/PageHeader';
import { admin_routes } from 'router';
import AdminPrevListLogic from 'components/admin/team/previous-seasons/AdminPrevListLogic';

const AdminPreviousSeasonsPage = () => {
  return (
    <div>
      <PageHeader title='Previous Seasons' backTo={admin_routes.ADMIN} />
      <AdminPrevListLogic />
    </div>
  );
};

export default AdminPreviousSeasonsPage;
