import React from 'react';
import Container from '@material-ui/core/Container';
import { reg_routes } from 'router';
import SectionBackground from 'shared/layout/SectionBackground';
import CustomTabs, { ITab } from 'lib/components/tabs/CustomTabs';
import CustomLinkButton from 'lib/components/buttons/CustomLinkButton';
import SignUpLogic from '../containers/SignUp.container';
import SignInLogic from '../containers/SignIn.container';

const RegTabs: React.FC = () => {
  const tabs: ITab[] = [
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
