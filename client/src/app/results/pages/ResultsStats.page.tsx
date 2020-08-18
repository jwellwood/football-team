import React from 'react';
import { PageHeader } from 'components/typography';
import { visitor_routes } from 'router';
import ResultStats from '../containers/ResultStats.container';
import { page_headers } from 'constants/text';

const ResultsStatsPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title={page_headers.RESULTS_STATS}
        backTo={visitor_routes.HOME}
      />
      <ResultStats />
    </>
  );
};

export default ResultsStatsPage;
