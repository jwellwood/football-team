import React from 'react';
import PageHeader from 'components/ui/text/PageHeader';
import { ADMIN_PREVIOUS_SEASON } from 'router/route_names';
import AddAwardLogic from 'components/admin/team/previous-seasons/awards/AddAwardLogic';

const AddSeasonAwardPage = () => {
  return (
    <div>
      <PageHeader title='Add Award' backTo={ADMIN_PREVIOUS_SEASON} />
      <AddAwardLogic />
    </div>
  );
};

export default AddSeasonAwardPage;
