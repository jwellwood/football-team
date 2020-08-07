import React from 'react';
import PageHeader from 'lib/components/typography/PageHeader';
import { admin_routes } from 'router';
import EditTeamDetailsLogic from 'Pages/admin-team/EditTeamDetailsLogic';

const EditTeamPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Edit Team Details' backTo={admin_routes.ADMIN} />
      <EditTeamDetailsLogic />
    </>
  );
};

export default EditTeamPage;
