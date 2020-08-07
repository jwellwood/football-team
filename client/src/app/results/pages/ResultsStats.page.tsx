import React from 'react';
import PageHeader from 'lib/components/typography/PageHeader';
import { visitor_routes } from 'router';
import ResultStats from '../containers/ResultStats.container';

const ResultsStatsPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Results Stats' backTo={visitor_routes.HOME} />
      <ResultStats />
    </>
  );
};

export default ResultsStatsPage;
