import React from 'react';
import PageHeader from 'components/ui/text/PageHeader';
import { admin_routes } from 'router';
import AdminUsersLogic from 'components/admin/users/AdminUsersLogic';

const AdminUsersPage = () => {
  return (
    <div>
      <PageHeader title='User Details' backTo={admin_routes.ADMIN} />
      <AdminUsersLogic />
    </div>
  );
};

export default AdminUsersPage;
