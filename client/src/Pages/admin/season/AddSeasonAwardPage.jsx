import React from 'react';
import PageHeader from 'components/ui/text/PageHeader';
import { admin_routes } from 'router';
import AddAwardLogic from 'components/admin/team/previous-seasons/awards/AddAwardLogic';

const AddSeasonAwardPage = () => {
  return (
    <div>
      <PageHeader
        title='Add Award'
        backTo={admin_routes.ADMIN_PREVIOUS_SEASON}
      />
      <AddAwardLogic />
    </div>
  );
};

export default AddSeasonAwardPage;
