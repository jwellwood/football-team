import React from 'react';
import { visitor_routes } from 'router';
import PageHeader from 'lib/components/typography/PageHeader';
import FAQs from '../components/FAQs';
import Footer from '../components/Footer';

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
