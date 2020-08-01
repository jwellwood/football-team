import React from 'react';
import PageHeader from 'components/ui/text/PageHeader';
import { admin_routes } from 'router';
import EditHOFLogic from 'components/admin/team/hof/EditHOFLogic';

const EditHOFPage = () => {
  return (
    <div>
      <PageHeader title='Edit Hall of Fame' backTo={admin_routes.ADMIN_HOF} />
      <EditHOFLogic />
    </div>
  );
};

export default EditHOFPage;
