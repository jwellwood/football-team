import React from 'react';
import Link from '@material-ui/core/Link';
import { footer_data } from 'shared/data';
import CenteredGrid from 'lib/components/grids/CenteredGrid';
import CustomTypography from 'components/ui/text/CustomTypography';
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
