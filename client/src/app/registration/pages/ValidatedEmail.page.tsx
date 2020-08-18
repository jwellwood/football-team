import React from 'react';
import { PageHeader } from 'components/typography';
import ValidatedEmail from '../containers/ValidatedEmail.container';
import { page_headers } from 'constants/text';

const ValidatedEmailPage: React.FC = () => {
  return (
    <>
      <PageHeader title={page_headers.VALIDATED_EMAIL} backTo='disabled' />
      <ValidatedEmail />
    </>
  );
};

export default ValidatedEmailPage;
