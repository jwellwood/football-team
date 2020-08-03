import React from 'react';
import Container from '@material-ui/core/Container';
import { reg_routes } from 'router';
import SectionBackground from 'shared/layout/SectionBackground';
import CustomTabs from 'components/ui/tabs/CustomTabs';
import CustomLinkButton from 'lib/components/buttons/CustomLinkButton';
import SignUpLogic from '../containers/SignUp.container';
import SignInLogic from '../containers/SignIn.container';

interface Tab {
  label: string;
  component: React.ReactNode;
}

const RegTabs: React.FC = () => {
  const tabs: Tab[] = [
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
