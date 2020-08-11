import React from 'react';
import { PageHeader } from 'components/typography';
import Admin from 'app/admin-home/components/AdminLinkList';
import { visitor_routes } from 'router';

const AdminPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Admin' backTo={visitor_routes.HOME} />
      <Admin />
    </>
  );
};

export default AdminPage;
