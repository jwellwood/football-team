import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import SectionBackground from 'shared/layout/SectionBackground';
import CustomIcon from 'lib/components/icons/CustomIcon';
import CustomAvatar from 'lib/components/avatars/CustomAvatar';
import GridItem from 'lib/components/grids/GridItem';
import CustomTypography from 'lib/components/typography/CustomTypography';
import CenteredGrid from 'lib/components/grids/CenteredGrid';
import { home_links, IHomeLink } from '../utils';

const HomeMenu: React.FC = () => {
  return (
    <CenteredGrid dir='row'>
      {home_links.map((item: IHomeLink, i) => (
        <GridItem key={item.text + i} xs={6}>
          <Link underline='none' component={RouterLink} to={item.link}>
            <SectionBackground>
              <CustomAvatar bordered centered>
                <CustomIcon icon={item.icon} color='primary' size='xs' />
              </CustomAvatar>
              <CustomTypography size='sm'>{item.text}</CustomTypography>
            </SectionBackground>
          </Link>
        </GridItem>
      ))}
    </CenteredGrid>
  );
};

export default HomeMenu;
