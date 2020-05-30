import React from 'react';
// Data
import { version } from 'assets/data';
// MUI
import Link from '@material-ui/core/Link';
// Components
import CustomText from 'components/ui/text/CustomText';
import CenteredGrid from 'components/ui/grids/CenteredGrid';

const Footer = () => {
  return (
    <CenteredGrid>
      <CustomText type='muted'>
        {'Copyright © '}
        <Link color='inherit' href='https://github.com/jwellwood'>
          jwellwood
        </Link>{' '}
        {new Date().getFullYear()}
      </CustomText>
      <CustomText type='caption'>version {version}</CustomText>
    </CenteredGrid>
  );
};

export default Footer;
