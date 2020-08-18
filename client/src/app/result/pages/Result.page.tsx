import React from 'react';
import { visitor_routes } from 'router';
import { PageHeader } from 'components/typography';
import Result from '../containers/Result.container';
import { page_headers } from 'constants/text';

const ResultPage = () => {
  return (
    <>
      <PageHeader
        title={page_headers.RESULT_DETAILS}
        backTo={visitor_routes.RESULTS}
      />
      <Result />
    </>
  );
};

export default ResultPage;
