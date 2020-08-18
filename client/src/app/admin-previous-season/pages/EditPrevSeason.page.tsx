import React from 'react';
import { PageHeader } from 'components/typography';
import { admin_routes } from 'router';
import EditPrevSeason from '../containers/EditPrevSeason.container';
import { page_headers } from 'constants/text';

const EditPrevSeasonPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title={page_headers.EDIT_SEASON}
        backTo={admin_routes.ADMIN_PREVIOUS_SEASON}
      />
      <EditPrevSeason />
    </>
  );
};

export default EditPrevSeasonPage;
