import React from 'react';
import PageHeader from 'components/ui/text/PageHeader';
import { ADMIN_PREVIOUS_SEASON } from 'router/route_names';
import EditPrevSeasonLogic from 'components/admin/team/previous-seasons/EditPrevSeasonLogic';

const EditPrevSeasonPage = () => {
  return (
    <div>
      <PageHeader title='Edit Season' backTo={ADMIN_PREVIOUS_SEASON} />
      <EditPrevSeasonLogic />
    </div>
  );
};

export default EditPrevSeasonPage;
