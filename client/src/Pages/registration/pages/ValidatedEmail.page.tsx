import React from 'react';
import PageHeader from 'lib/components/typography/PageHeader';
import ValidatedEmail from '../containers/ValidatedEmail.container';

const ValidatedEmailPage: React.FC = () => {
  return (
    <>
      <PageHeader title='' backTo='disabled' />
      <ValidatedEmail />
    </>
  );
};

export default ValidatedEmailPage;
