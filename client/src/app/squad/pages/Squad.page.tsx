import React from 'react';
import { visitor_routes } from 'router';
import { PageHeader } from 'components/typography';
import SquadList from '../containers/SquadList.container';
import { page_headers } from 'constants/text';

const SquadPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title={page_headers.SQUAD_LIST}
        backTo={visitor_routes.HOME}
      />
      <SquadList />
    </>
  );
};

export default SquadPage;
