import React from 'react';
import { ADMIN_PREVIOUS_SEASON } from 'router/route_names';
import PageHeader from 'components/ui/text/PageHeader';
import AddPrevSeasonLogic from 'components/admin/team/previous-seasons/AddPrevSeasonLogic';

const AddPreviousSeasonPage = () => {
  return (
    <div>
      <PageHeader title='Add Season' backTo={ADMIN_PREVIOUS_SEASON} />
      <AddPrevSeasonLogic />
    </div>
  );
};

export default AddPreviousSeasonPage;
