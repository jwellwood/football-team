import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { IHomeLinks } from 'shared/types';
import SectionBackground from 'shared/layout/SectionBackground';
import CustomIcon from 'components/ui/icons/CustomIcon';
import CustomAvatar from 'components/ui/avatars/CustomAvatar';
import GridItem from 'components/ui/grids/GridItem';
import CustomTypography from 'components/ui/text/CustomTypography';
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import { home_links } from './links';

const HomeMenu = () => {
  return (
    <CenteredGrid dir='row'>
      {home_links.map((item: IHomeLinks, i) => (
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
