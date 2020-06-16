import React from 'react';
import PageHeader from 'components/ui/text/PageHeader';
import { ADMIN } from 'router/route_names';
import EditTeamPhotoLogic from 'components/admin/team/photo/EditTeamPhotoLogic';

const EditTeamPhotoPage = () => {
  return (
    <div>
      <PageHeader title='Edit Team Photo' backTo={ADMIN} />
      <EditTeamPhotoLogic />
    </div>
  );
};

export default EditTeamPhotoPage;
