import React from 'react';
import { user_routes } from 'router';
import { PageHeader } from 'components/typography';
import EditPlayer from '../containers/EditPlayer.container';
import { page_headers } from 'constants/text';

const EditPlayerPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title={page_headers.EDIT_PLAYER_INFO}
        backTo={user_routes.PROFILE}
      />
      <EditPlayer />
    </>
  );
};

export default EditPlayerPage;
