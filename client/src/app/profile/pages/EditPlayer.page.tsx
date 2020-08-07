import React from 'react';
import { user_routes } from 'router';
import PageHeader from 'lib/components/typography/PageHeader';
import EditPlayer from '../containers/EditPlayer.container';

const EditPlayerPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Edit Details' backTo={user_routes.PROFILE} />
      <EditPlayer />
    </>
  );
};

export default EditPlayerPage;
