import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// MUI
import Link from '@material-ui/core/Link';
//
import CustomIcon from 'components/ui/icons/CustomIcon';
import GreyBackground from 'containers/GreyBackground';
import CustomAvatar from 'components/ui/avatars/CustomAvatar';
import GridItem from 'components/ui/grids/GridItem';
import CustomTypography from 'components/ui/text/CustomTypography';

const HomeGrid = ({ data }) => {
  return data.map((item, i) => (
    <GridItem key={item.text + i} xs={6}>
      <Link underline='none' component={RouterLink} to={item.link}>
        <GreyBackground>
          <CustomAvatar bordered>
            <CustomIcon icon={item.icon} color='primary' size='xs' />
          </CustomAvatar>
          <CustomTypography size='sm'>{item.text}</CustomTypography>
        </GreyBackground>
      </Link>
    </GridItem>
  ));
};

export default HomeGrid;
