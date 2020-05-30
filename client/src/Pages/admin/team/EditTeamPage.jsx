import React from 'react';
import PageHeader from 'components/ui/headers/PageHeader';
import { ADMIN } from 'router/route_names';
import EditTeamDetailsLogic from 'components/admin/team/details/EditTeamDetailsLogic';

const EditTeamPage = () => {
  return (
    <div>
      <PageHeader title='Edit Team Details' backTo={ADMIN} />
      <EditTeamDetailsLogic />
    </div>
  );
};

export default EditTeamPage;
