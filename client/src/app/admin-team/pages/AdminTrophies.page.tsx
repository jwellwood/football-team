import React from 'react';
import { PageHeader } from 'components/typography';
import { admin_routes } from 'router';
import AdminTrophiesList from '../components/AdminTrophiesList';

const AdminTrophiesPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Trophies' backTo={admin_routes.ADMIN} />
      <AdminTrophiesList />
    </>
  );
};

export default AdminTrophiesPage;
