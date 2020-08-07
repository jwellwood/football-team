import React from 'react';
import { admin_routes } from 'router';
import PageHeader from 'lib/components/typography/PageHeader';
import AddMatchPlayer from 'app/admin-result/containers/AddMatchPlayer.container';

const AddMatchPlayerPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title='Add Match Player'
        backTo={admin_routes.ADMIN_RESULTS}
      />
      <AddMatchPlayer />
    </>
  );
};

export default AddMatchPlayerPage;
