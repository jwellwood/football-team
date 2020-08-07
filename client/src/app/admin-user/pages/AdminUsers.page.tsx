import React from 'react';
import PageHeader from 'lib/components/typography/PageHeader';
import { admin_routes } from 'router';
import AdminUsers from 'app/admin-user/containers/AdminUsers.container';

const AdminUsersPage: React.FC = () => {
  return (
    <>
      <PageHeader title='User Details' backTo={admin_routes.ADMIN} />
      <AdminUsers />
    </>
  );
};

export default AdminUsersPage;
