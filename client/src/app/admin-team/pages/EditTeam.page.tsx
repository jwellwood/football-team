import React from 'react';
import PageHeader from 'lib/components/typography/PageHeader';
import { admin_routes } from 'router';
import EditTeamDetails from 'app/admin-team/containers/EditTeamDetails.container';

const EditTeamPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Edit Team Details' backTo={admin_routes.ADMIN} />
      <EditTeamDetails />
    </>
  );
};

export default EditTeamPage;
