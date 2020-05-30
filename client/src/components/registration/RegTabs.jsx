import React from 'react';
// MUI
import Container from '@material-ui/core/Container';
// Components
import CustomTabs from 'components/ui/tabs/CustomTabs';
import GreyBackground from 'containers/GreyBackground';
import SignInLogic from './signin/SignInLogic';
import SignUpLogic from './signup/SignUpLogic';

const RegTabs = () => {
  const tabs = [
    { label: 'Sign in', component: <SignInLogic /> },
    { label: 'Sign up', component: <SignUpLogic /> },
  ];
  return (
    <Container maxWidth='sm'>
      <GreyBackground placeholder>
        <GreyBackground>
          <CustomTabs tabs={tabs} centered />
        </GreyBackground>
      </GreyBackground>
    </Container>
  );
};

export default RegTabs;
