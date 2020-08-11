import React from 'react';
import { visitor_routes } from 'router';
import { PageHeader } from 'components/typography';
import Results from '../containers/Results.container';

const ResultsPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Results' backTo={visitor_routes.HOME} />
      <Results />
    </>
  );
};

export default ResultsPage;
