import React from 'react';
import PageHeader from 'components/ui/headers/PageHeader';
import { ADMIN } from 'router/route_names';
import AdminTrophiesList from 'components/admin/team/trophies/AdminTrophiesList';

const AdminTrophiesPage = () => {
  return (
    <div>
      <PageHeader title='Trophies' backTo={ADMIN} />
      <AdminTrophiesList />
    </div>
  );
};

export default AdminTrophiesPage;
