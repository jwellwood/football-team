import React from 'react';
import { PageHeader } from 'components/typography';
import { admin_routes } from 'router';
import EditTeamPhoto from '../containers/EditTeamPhoto.container';

const EditTeamPhotoPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Edit Team Photo' backTo={admin_routes.ADMIN} />
      <EditTeamPhoto />
    </>
  );
};

export default EditTeamPhotoPage;
