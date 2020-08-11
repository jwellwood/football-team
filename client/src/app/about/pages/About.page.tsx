import React from 'react';
import { visitor_routes } from 'router';
import { PageHeader } from 'components/typography';
import { Footer, FAQs } from '../components';

export default () => {
  return (
    <>
      <PageHeader title='About' backTo={visitor_routes.HOME} />
      <>
        <FAQs />
        <Footer />
      </>
    </>
  );
};
