import React from 'react';
import PageHeader from 'components/ui/text/PageHeader';
import Admin from 'components/admin/Admin';
import { HOME } from 'router/route_names';

const AdminPage = () => {
  return (
    <div>
      <PageHeader title='Admin' backTo={HOME} />
      <Admin />
    </div>
  );
};

export default AdminPage;
