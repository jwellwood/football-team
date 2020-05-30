import React from 'react';
import PageHeader from 'components/ui/headers/PageHeader';
import ValidatedEmailLogic from 'components/registration/signup/ValidatedEmailLogic';

const ValidatedEmailPage = () => {
  return (
    <div>
      <PageHeader title='' backTo='disabled' />
      <ValidatedEmailLogic />
    </div>
  );
};

export default ValidatedEmailPage;
