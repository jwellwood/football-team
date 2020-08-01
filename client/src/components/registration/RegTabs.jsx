import React from 'react';
// MUI
import Container from '@material-ui/core/Container';
// Routes
import { reg_routes } from 'router';
// Components
import CustomTabs from 'components/ui/tabs/CustomTabs';
import SectionBackground from 'containers/SectionBackground';
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

          <CustomLinkButton link={reg_routes.FORGOT_PASSWORD}>
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
      <SectionBackground placeholder>
        <CustomTabs tabs={tabs} centered />
      </SectionBackground>
    </Container>
  );
};

export default RegTabs;
