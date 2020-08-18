import React from 'react';
import { PageHeader } from 'components/typography';
import { admin_routes } from 'router';
import AdminTrophiesList from '../components/AdminTrophiesList';
import { page_headers } from 'constants/text';

const AdminTrophiesPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title={page_headers.ADMIN_TROPHIES}
        backTo={admin_routes.ADMIN}
      />
      <AdminTrophiesList />
    </>
  );
};

export default AdminTrophiesPage;
