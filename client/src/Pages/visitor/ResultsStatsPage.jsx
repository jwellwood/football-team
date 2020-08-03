import React from 'react';
import PageHeader from 'lib/components/typography/PageHeader';
import { visitor_routes } from 'router';
import ResultStatsLogic from 'components/visitor/stats/result-stats/ResultStatsLogic';

const ResultsStatsPage = () => {
  return (
    <div>
      <PageHeader title='Results Stats' backTo={visitor_routes.HOME} />
      <ResultStatsLogic />
    </div>
  );
};

export default ResultsStatsPage;
