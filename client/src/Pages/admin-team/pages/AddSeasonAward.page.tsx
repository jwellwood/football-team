import React from 'react';
import PageHeader from 'lib/components/typography/PageHeader';
import { admin_routes } from 'router';
import AddAwardLogic from '../AddAwardLogic';

const AddSeasonAwardPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title='Add Award'
        backTo={admin_routes.ADMIN_PREVIOUS_SEASON}
      />
      <AddAwardLogic />
    </>
  );
};

export default AddSeasonAwardPage;
