import React from 'react';
import { visitor_routes } from 'router';
import PageHeader from 'lib/components/typography/PageHeader';
import Result from '../containers/Result.container';

const ResultPage = () => {
  return (
    <>
      <PageHeader title='Result Details' backTo={visitor_routes.RESULTS} />
      <Result />
    </>
  );
};

export default ResultPage;