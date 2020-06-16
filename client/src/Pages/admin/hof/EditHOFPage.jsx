import React from 'react';
import PageHeader from 'components/ui/text/PageHeader';
import { ADMIN_HOF } from 'router/route_names';
import EditHOFLogic from 'components/admin/team/hof/EditHOFLogic';

const EditHOFPage = () => {
  return (
    <div>
      <PageHeader title='Edit Hall of Fame' backTo={ADMIN_HOF} />
      <EditHOFLogic />
    </div>
  );
};

export default EditHOFPage;
