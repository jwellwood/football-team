import React from 'react';
import PageHeader from 'lib/components/typography/PageHeader';
import { admin_routes } from 'router';
import AdminHOFList from 'components/admin/team/hof/AdminHOFList';

const AdminHOFPage = () => {
  return (
    <div>
      <PageHeader title='Hall of Fame' backTo={admin_routes.ADMIN} />
      <AdminHOFList />
    </div>
  );
};

export default AdminHOFPage;
