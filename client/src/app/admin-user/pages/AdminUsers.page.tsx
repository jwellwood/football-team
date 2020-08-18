import React from 'react';
import { PageHeader } from 'components/typography';
import { admin_routes } from 'router';
import AdminUsers from 'app/admin-user/containers/AdminUsers.container';
import { page_headers } from 'constants/text';

const AdminUsersPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title={page_headers.ADMIN_USERS}
        backTo={admin_routes.ADMIN}
      />
      <AdminUsers />
    </>
  );
};

export default AdminUsersPage;
