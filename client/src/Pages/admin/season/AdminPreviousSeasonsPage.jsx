import React from 'react';
import PageHeader from 'components/ui/text/PageHeader';
import { ADMIN } from 'router/route_names';
import AdminPrevListLogic from 'components/admin/team/previous-seasons/AdminPrevListLogic';

const AdminPreviousSeasonsPage = () => {
  return (
    <div>
      <PageHeader title='Previous Seasons' backTo={ADMIN} />
      <AdminPrevListLogic />
    </div>
  );
};

export default AdminPreviousSeasonsPage;
