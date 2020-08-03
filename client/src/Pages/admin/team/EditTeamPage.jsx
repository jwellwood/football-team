import React from 'react';
import PageHeader from 'lib/components/typography/PageHeader';
import { admin_routes } from 'router';
import EditTeamDetailsLogic from 'components/admin/team/details/EditTeamDetailsLogic';

const EditTeamPage = () => {
  return (
    <div>
      <PageHeader title='Edit Team Details' backTo={admin_routes.ADMIN} />
      <EditTeamDetailsLogic />
    </div>
  );
};

export default EditTeamPage;
