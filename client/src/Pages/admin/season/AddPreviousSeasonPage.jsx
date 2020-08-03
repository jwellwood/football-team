import React from 'react';
import { admin_routes } from 'router';
import PageHeader from 'lib/components/typography/PageHeader';
import AddPrevSeasonLogic from 'components/admin/team/previous-seasons/AddPrevSeasonLogic';

const AddPreviousSeasonPage = () => {
  return (
    <div>
      <PageHeader
        title='Add Season'
        backTo={admin_routes.ADMIN_PREVIOUS_SEASON}
      />
      <AddPrevSeasonLogic />
    </div>
  );
};

export default AddPreviousSeasonPage;
