import React from 'react';
import { PageHeader } from 'components/typography';
import { admin_routes } from 'router';
import AdminHOFList from '../components/AdminHOFList';

const AdminHOFPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Hall of Fame' backTo={admin_routes.ADMIN} />
      <AdminHOFList />
    </>
  );
};

export default AdminHOFPage;
