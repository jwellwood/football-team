import React from 'react';
import PageHeader from 'lib/components/typography/PageHeader';
import { admin_routes } from 'router';
import AdminTrophiesList from '../AdminTrophiesList';

const AdminTrophiesPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Trophies' backTo={admin_routes.ADMIN} />
      <AdminTrophiesList />
    </>
  );
};

export default AdminTrophiesPage;
