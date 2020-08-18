import React from 'react';
import { admin_routes } from 'router';
import { PageHeader } from 'components/typography';
import AddMatchPlayer from 'app/admin-result/containers/AddMatchPlayer.container';
import { page_headers } from 'constants/text';

const AddMatchPlayerPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title={page_headers.ADD_MATCH_PLAYER}
        backTo={admin_routes.ADMIN_RESULTS}
      />
      <AddMatchPlayer />
    </>
  );
};

export default AddMatchPlayerPage;
