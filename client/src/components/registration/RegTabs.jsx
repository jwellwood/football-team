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
          <GreyBackground placeholder>
            <SignInLogic />
          </GreyBackground>

          <CustomLinkButton link={FORGOT_PASSWORD}>
            Forgot password?
          </CustomLinkButton>
        </>
      ),
    },
    {
      label: 'Sign up',
      component: (
        <GreyBackground placeholder>
          <SignUpLogic />
        </GreyBackground>
      ),
    },
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
