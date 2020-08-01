import React from 'react';
import PageHeader from 'components/ui/text/PageHeader';
import { admin_routes } from 'router';
import AddTeamToDB from 'components/admin/team/details/AddTeamToDB';

const AddTeamPage = () => {
  return (
    <div>
      <PageHeader title='Add Team' backTo={admin_routes.ADMIN} />
      <AddTeamToDB />
    </div>
  );
};

export default AddTeamPage;
