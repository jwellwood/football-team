import React from 'react';
import { admin_routes } from 'router';
import PageHeader from 'lib/components/typography/PageHeader';
import AddPrevSeason from '../containers/AddPrevSeason.container';

const AddPreviousSeasonPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title='Add Season'
        backTo={admin_routes.ADMIN_PREVIOUS_SEASON}
      />
      <AddPrevSeason />
    </>
  );
};

export default AddPreviousSeasonPage;
