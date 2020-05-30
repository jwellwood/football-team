import React from 'react';
import { HOME } from 'router/route_names';
import PageHeader from 'components/ui/headers/PageHeader';
import ResultsListLogic from 'components/visitor/results/ResultsListLogic';

const ResultsPage = () => {
  return (
    <div>
      <PageHeader title='Results' backTo={HOME} />
      <ResultsListLogic />
    </div>
  );
};

export default ResultsPage;
