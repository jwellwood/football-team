import React from 'react';
import PageHeader from 'lib/components/typography/PageHeader';
import { admin_routes } from 'router';
import EditPrevSeason from '../containers/EditPrevSeason.container';

const EditPrevSeasonPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title='Edit Season'
        backTo={admin_routes.ADMIN_PREVIOUS_SEASON}
      />
      <EditPrevSeason />
    </>
  );
};

export default EditPrevSeasonPage;
