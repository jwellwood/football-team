import React from 'react';
import PageHeader from 'lib/components/typography/PageHeader';
import { admin_routes } from 'router';
import AdminPrevListLogic from '../AdminPrevListLogic';

const AdminPreviousSeasonsPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Previous Seasons' backTo={admin_routes.ADMIN} />
      <AdminPrevListLogic />
    </>
  );
};

export default AdminPreviousSeasonsPage;
