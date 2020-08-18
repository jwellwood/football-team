import React from 'react';
import { visitor_routes } from 'router';
import { PageHeader } from 'components/typography';
import Results from '../containers/Results.container';
import { page_headers } from 'constants/text';

const ResultsPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title={page_headers.RESULTS_LIST}
        backTo={visitor_routes.HOME}
      />
      <Results />
    </>
  );
};

export default ResultsPage;
