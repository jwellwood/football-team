import React from 'react';
import { visitor_routes } from 'router';
import PageHeader from 'components/ui/text/PageHeader';
import FAQs from './FAQs';
import Footer from './Footer';

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
