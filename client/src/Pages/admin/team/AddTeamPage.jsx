import React from 'react';
import PageHeader from 'components/ui/headers/PageHeader';
import { ADMIN } from 'router/route_names';
import AddTeamToDB from 'components/admin/team/details/AddTeamToDB';

const AddTeamPage = () => {
  return (
    <div>
      <PageHeader title='Add Team' backTo={ADMIN} />
      <AddTeamToDB />
    </div>
  );
};

export default AddTeamPage;
