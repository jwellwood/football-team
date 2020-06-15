import React from 'react';
// MUI
import ListItemText from '@material-ui/core/ListItemText';
// Components
import CustomAvatar from 'components/ui/avatars/CustomAvatar';
import StatIcon from 'components/ui/icons/StatIcon';
import CustomText from 'components/ui/text/CustomText';
import GreyBackground from 'containers/GreyBackground';
import ListWrapper from 'components/ui/lists/ListWrapper';
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';

const MvpDisplay = ({ mvp }) => {
  return mvp.length ? (
    <GreyBackground>
      <ListWrapper>
        <ListItemWrapper>
          <CustomAvatar shadow='warning' isList>
            <StatIcon type='mvp' />
          </CustomAvatar>
          <ListItemText
            primary={mvp.map((pl, i) => (
              <CustomText key={pl.player_id._id} div>
                {pl.player_id.name}
              </CustomText>
            ))}
          />
        </ListItemWrapper>
      </ListWrapper>
    </GreyBackground>
  ) : (
    <CustomText type='placeholder' text='No mvp' />
  );
};

export default MvpDisplay;
