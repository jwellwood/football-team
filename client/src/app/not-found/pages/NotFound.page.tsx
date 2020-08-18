import React from 'react';
import { visitor_routes } from 'router';
import { PageHeader } from 'components/typography';
import { NotFound } from '../components';
import { page_headers } from 'constants/text';

export default () => {
  return (
    <>
      <PageHeader title={page_headers.NOT_FOUND} backTo={visitor_routes.HOME} />
      <NotFound />
    </>
  );
};
