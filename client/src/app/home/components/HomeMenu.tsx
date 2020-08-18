import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { SectionBackground } from 'shared/layout/containers';
import CustomIcon from 'lib/icons/CustomIcon';
import { CustomAvatar } from 'components/avatars';
import { CustomTypography } from 'components/typography';
import { CenteredGrid, GridItem } from 'shared/layout/grids';
import { home_links, IHomeLink } from '../utils';

const HomeMenu: React.FC = () => {
  return (
    <CenteredGrid dir='row'>
      {home_links.map((item: IHomeLink, i: number) => (
        <GridItem key={item.text + i} xs={6}>
          <Link underline='none' component={RouterLink} to={item.link}>
            <SectionBackground>
              <CustomAvatar centered bordered>
                <CustomIcon icon={item.icon} color='primary' size='xs' />
              </CustomAvatar>
              <CustomTypography size='sm'>
                {item.text.toLocaleLowerCase()}
              </CustomTypography>
            </SectionBackground>
          </Link>
        </GridItem>
      ))}
    </CenteredGrid>
  );
};

export default HomeMenu;
