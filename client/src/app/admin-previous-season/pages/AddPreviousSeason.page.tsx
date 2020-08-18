import React from 'react';
import { admin_routes } from 'router';
import { PageHeader } from 'components/typography';
import AddPrevSeason from '../containers/AddPrevSeason.container';
import { page_headers } from 'constants/text';

const AddPreviousSeasonPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title={page_headers.ADD_SEASON}
        backTo={admin_routes.ADMIN_PREVIOUS_SEASON}
      />
      <AddPrevSeason />
    </>
  );
};

export default AddPreviousSeasonPage;
