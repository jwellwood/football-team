import React from 'react';
import PageHeader from 'components/ui/text/PageHeader';
import { admin_routes } from 'router';
import AdminTrophiesList from 'components/admin/team/trophies/AdminTrophiesList';

const AdminTrophiesPage = () => {
  return (
    <div>
      <PageHeader title='Trophies' backTo={admin_routes.ADMIN} />
      <AdminTrophiesList />
    </div>
  );
};

export default AdminTrophiesPage;
