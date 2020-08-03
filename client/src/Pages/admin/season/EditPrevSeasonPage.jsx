import React from 'react';
import PageHeader from 'lib/components/typography/PageHeader';
import { admin_routes } from 'router';
import EditPrevSeasonLogic from 'components/admin/team/previous-seasons/EditPrevSeasonLogic';

const EditPrevSeasonPage = () => {
  return (
    <div>
      <PageHeader
        title='Edit Season'
        backTo={admin_routes.ADMIN_PREVIOUS_SEASON}
      />
      <EditPrevSeasonLogic />
    </div>
  );
};

export default EditPrevSeasonPage;
