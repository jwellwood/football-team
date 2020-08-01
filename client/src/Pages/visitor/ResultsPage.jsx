import React from 'react';
import { visitor_routes } from 'router';
import PageHeader from 'components/ui/text/PageHeader';
import ResultsListLogic from 'components/visitor/results/ResultsListLogic';

const ResultsPage = () => {
  return (
    <div>
      <PageHeader title='Results' backTo={visitor_routes.HOME} />
      <ResultsListLogic />
    </div>
  );
};

export default ResultsPage;
