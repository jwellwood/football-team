import React from 'react';
import { PageHeader } from 'components/typography';
import { admin_routes } from 'router';
import AddAward from '../containers/AddAward.container';

const AddSeasonAwardPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title='Add Award'
        backTo={admin_routes.ADMIN_PREVIOUS_SEASON}
      />
      <AddAward />
    </>
  );
};

export default AddSeasonAwardPage;
