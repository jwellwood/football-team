import React from 'react';
// Data
import { version } from 'assets/data';
// MUI
import Link from '@material-ui/core/Link';
// Components
import CustomText from 'components/ui/text/CustomText';
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import Changelog from './Changelog';

const Footer = () => {
  return (
    <div style={{ marginTop: '20px' }}>
      <CenteredGrid>
        <CustomText type='muted'>
          {'Copyright © '}
          <Link color='inherit' href='https://github.com/jwellwood'>
            jwellwood
          </Link>{' '}
          {new Date().getFullYear()}
        </CustomText>
        <Changelog />
        <CustomText type='caption'>version {version}</CustomText>
      </CenteredGrid>
    </div>
  );
};

export default Footer;
