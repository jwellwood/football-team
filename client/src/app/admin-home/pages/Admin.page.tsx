import React from 'react';
import { PageHeader } from 'components/typography';
import Admin from 'app/admin-home/components/AdminLinkList';
import { visitor_routes } from 'router';
import { page_headers } from 'constants/text';

const AdminPage: React.FC = () => {
  return (
    <>
      <PageHeader title={page_headers.ADMIN} backTo={visitor_routes.HOME} />
      <Admin />
    </>
  );
};

export default AdminPage;
