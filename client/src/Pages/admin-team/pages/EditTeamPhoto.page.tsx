import React from 'react';
import PageHeader from 'lib/components/typography/PageHeader';
import { admin_routes } from 'router';
import EditTeamPhotoLogic from '../EditTeamPhotoLogic';

const EditTeamPhotoPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Edit Team Photo' backTo={admin_routes.ADMIN} />
      <EditTeamPhotoLogic />
    </>
  );
};

export default EditTeamPhotoPage;
