import React from 'react';
import PageHeader from 'components/ui/text/PageHeader';
import { ADMIN } from 'router/route_names';
import AdminUsersLogic from 'components/admin/users/AdminUsersLogic';

const AdminUsersPage = () => {
  return (
    <div>
      <PageHeader title='User Details' backTo={ADMIN} />
      <AdminUsersLogic />
    </div>
  );
};

export default AdminUsersPage;
