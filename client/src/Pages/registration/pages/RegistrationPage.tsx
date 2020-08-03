import React from 'react';
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import RegPageImage from '../components/RegPageImage';
import RegPageTabs from '../components/RegPageTabs';

const RegistrationPage: React.FC = () => {
  return (
    <CenteredGrid>
      <RegPageImage />
      <RegPageTabs />
    </CenteredGrid>
  );
};

export default RegistrationPage;
