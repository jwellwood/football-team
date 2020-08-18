import React from 'react';
import { PageHeader } from 'components/typography';
import { admin_routes } from 'router';
import EditTeamPhoto from '../containers/EditTeamPhoto.container';
import { page_headers } from 'constants/text';

const EditTeamPhotoPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title={page_headers.EDIT_TEAM_PHOTO}
        backTo={admin_routes.ADMIN}
      />
      <EditTeamPhoto />
    </>
  );
};

export default EditTeamPhotoPage;
