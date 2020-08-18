import React from 'react';
import { PageHeader } from 'components/typography';
import { admin_routes } from 'router';
import AdminHOFList from '../components/AdminHOFList';
import { page_headers } from 'constants/text';

const AdminHOFPage: React.FC = () => {
  return (
    <>
      <PageHeader title={page_headers.ADMIN_HOF} backTo={admin_routes.ADMIN} />
      <AdminHOFList />
    </>
  );
};

export default AdminHOFPage;
