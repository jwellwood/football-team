import React from 'react';
// Components
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import CustomAvatar from 'components/ui/avatars/CustomAvatar';
import StatIcon from 'components/ui/icons/StatIcon';
import CustomText from 'components/ui/text/CustomText';
import GridItem from 'components/ui/grids/GridItem';

const MvpDisplay = ({ mvp }) => {
  return mvp.length ? (
    <CenteredGrid>
      <GridItem>
        <CustomAvatar shadow='warning'>
          <StatIcon type='mvp' />
        </CustomAvatar>
      </GridItem>
      <GridItem>
        {mvp.map((pl, i) => (
          <CustomText key={pl.player_id._id} type='highlight' div>
            {pl.player_id.name}
          </CustomText>
        ))}
      </GridItem>
    </CenteredGrid>
  ) : (
    <CustomText type='placeholder' text='No mvp' />
  );
};

export default MvpDisplay;
