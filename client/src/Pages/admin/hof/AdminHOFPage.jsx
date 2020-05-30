import React from 'react';
import PageHeader from 'components/ui/headers/PageHeader';
import { ADMIN } from 'router/route_names';
import AdminHOFList from 'components/admin/team/hof/AdminHOFList';

const AdminHOFPage = () => {
  return (
    <div>
      <PageHeader title='Hall of Fame' backTo={ADMIN} />
      <AdminHOFList />
    </div>
  );
};

export default AdminHOFPage;
