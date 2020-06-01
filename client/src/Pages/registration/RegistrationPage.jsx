import React from 'react';
import RegImage from 'components/registration/RegImage';
import RegTabs from 'components/registration/RegTabs';
import CenteredGrid from 'components/ui/grids/CenteredGrid';

const RegistrationPage = () => {
  return (
    <CenteredGrid>
      <RegImage />
      <RegTabs />
    </CenteredGrid>
  );
};

export default RegistrationPage;
