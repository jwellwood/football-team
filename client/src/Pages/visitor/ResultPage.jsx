import React from 'react';
import { RESULTS } from 'router/route_names';
import PageHeader from 'components/ui/text/PageHeader';
import ResultLogic from 'components/visitor/result/ResultLogic';

const ResultPage = () => {
  return (
    <div>
      <PageHeader backTo={RESULTS} />
      <ResultLogic />
    </div>
  );
};

export default ResultPage;
