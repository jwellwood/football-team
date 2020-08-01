import React from 'react';
import PageHeader from 'components/ui/text/PageHeader';
import { admin_routes } from 'router';
import EditTeamPhotoLogic from 'components/admin/team/photo/EditTeamPhotoLogic';

const EditTeamPhotoPage = () => {
  return (
    <div>
      <PageHeader title='Edit Team Photo' backTo={admin_routes.ADMIN} />
      <EditTeamPhotoLogic />
    </div>
  );
};

export default EditTeamPhotoPage;
