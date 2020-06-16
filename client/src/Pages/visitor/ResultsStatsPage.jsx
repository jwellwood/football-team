import React from 'react';
import PageHeader from 'components/ui/text/PageHeader';
import { HOME } from 'router/route_names';
import ResultStatsLogic from 'components/visitor/stats/result-stats/ResultStatsLogic';

const ResultsStatsPage = () => {
  return (
    <div>
      <PageHeader title='Results Stats' backTo={HOME} />
      <ResultStatsLogic />
    </div>
  );
};

export default ResultsStatsPage;
