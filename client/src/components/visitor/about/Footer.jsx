import React from 'react';
// Data
import { version } from 'shared/data';
// MUI
import Link from '@material-ui/core/Link';
// Components
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import Changelog from './Changelog';
import CustomTypography from 'components/ui/text/CustomTypography';

const Footer = () => {
  return (
    <div style={{ marginTop: '20px' }}>
      <CenteredGrid>
        <CustomTypography size='sm'>
          {'Copyright © '}
          <Link color='inherit' href='https://github.com/jwellwood'>
            jwellwood
          </Link>{' '}
          {new Date().getFullYear()}
        </CustomTypography>
        <Changelog />
        <CustomTypography size='sm'>version {version}</CustomTypography>
      </CenteredGrid>
    </div>
  );
};

export default Footer;
