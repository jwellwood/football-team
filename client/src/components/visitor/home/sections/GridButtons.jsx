import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// MUI
import Link from '@material-ui/core/Link';
//
import CustomIcon from 'components/ui/icons/CustomIcon';
import GreyBackground from 'containers/GreyBackground';
import CustomAvatar from 'components/ui/avatars/CustomAvatar';
import GridItem from 'components/ui/grids/GridItem';
import CustomText from 'components/ui/text/CustomText';

const HomeGrid = ({ data }) => {
  return data.map((item, i) => (
    <GridItem key={item.text + i} xs={6}>
      <Link underline='none' component={RouterLink} to={item.link}>
        <GreyBackground>
          <CustomAvatar bordered>
            <CustomIcon icon={item.icon} color='primary' size='xs' />
          </CustomAvatar>
          <CustomText type='caption'>{item.text}</CustomText>
        </GreyBackground>
      </Link>
    </GridItem>
  ));
};

export default HomeGrid;
