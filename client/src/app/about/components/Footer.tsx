import React from 'react';
// Data
import { footer_data } from '../utils';
// Components
import Link from '@material-ui/core/Link';
import { CenteredGrid } from 'shared/layout/grids';
import { CustomTypography } from 'components/typography';
import Changelog from './Changelog';

const { name, date, version, link } = footer_data;

const Footer: React.FC = () => {
  return (
    <div style={{ marginTop: '20px' }}>
      <CenteredGrid>
        <CustomTypography size='sm'>
          {'Copyright © '}
          <Link color='inherit' href={link}>
            {name}
          </Link>{' '}
          {date}
        </CustomTypography>
        <Changelog />
        <CustomTypography size='sm'>version {version}</CustomTypography>
      </CenteredGrid>
    </div>
  );
};

export default Footer;
