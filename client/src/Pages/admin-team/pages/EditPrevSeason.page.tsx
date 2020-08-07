import React from 'react';
import PageHeader from 'lib/components/typography/PageHeader';
import { admin_routes } from 'router';
import EditPrevSeasonLogic from '../EditPrevSeasonLogic';

const EditPrevSeasonPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title='Edit Season'
        backTo={admin_routes.ADMIN_PREVIOUS_SEASON}
      />
      <EditPrevSeasonLogic />
    </>
  );
};

export default EditPrevSeasonPage;
