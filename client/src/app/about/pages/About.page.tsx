import React from 'react';
import { visitor_routes } from 'router';
import { PageHeader } from 'components/typography';
import { Footer, FAQs } from '../components';
import { page_headers } from 'constants/text';

export default () => {
  return (
    <>
      <PageHeader title={page_headers.ABOUT} backTo={visitor_routes.HOME} />
      <>
        <FAQs />
        <Footer />
      </>
    </>
  );
};
