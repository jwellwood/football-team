import React from 'react';
// MUI
import Container from '@material-ui/core/Container';
// Routes
import { FORGOT_PASSWORD } from 'router/route_names';
// Components
import CustomTabs from 'components/ui/tabs/CustomTabs';
import GreyBackground from 'containers/GreyBackground';
import SignInLogic from './signin/SignInLogic';
import SignUpLogic from './signup/SignUpLogic';
import CustomLinkButton from 'components/ui/buttons/CustomLinkButton';

const RegTabs = () => {
  const tabs = [
    {
      label: 'Sign in',
      component: (
        <>
          <SignInLogic />

          <CustomLinkButton link={FORGOT_PASSWORD}>
            Forgot password?
          </CustomLinkButton>
        </>
      ),
    },
    {
      label: 'Sign up',
      component: <SignUpLogic />,
    },
  ];
  return (
    <Container maxWidth='sm'>
      <GreyBackground placeholder>
        <CustomTabs tabs={tabs} centered />
      </GreyBackground>
    </Container>
  );
};

export default RegTabs;
