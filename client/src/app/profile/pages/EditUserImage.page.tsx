import React from 'react';
import { user_routes } from 'router';
import { PageHeader } from 'components/typography';
import EditUserImage from '../containers/EditUserImage.container';
import { page_headers } from 'constants/text';

const EditUserImagePage: React.FC = () => {
  return (
    <>
      <PageHeader
        title={page_headers.EDIT_USER_IMAGE}
        backTo={user_routes.PROFILE}
      />
      <EditUserImage />
    </>
  );
};

export default EditUserImagePage;
