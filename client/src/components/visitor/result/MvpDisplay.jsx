import React from 'react';
// MUI
import ListItemText from '@material-ui/core/ListItemText';
// Components
import CustomAvatar from 'components/ui/avatars/CustomAvatar';
import StatIcon from 'components/ui/icons/StatIcon';
import SectionBackground from 'shared/layout/SectionBackground';
import ListWrapper from 'components/ui/lists/ListWrapper';
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';
import CustomTypography from 'components/ui/text/CustomTypography';

const MvpDisplay = ({ mvp }) => {
  return mvp.length ? (
    <SectionBackground>
      <ListWrapper>
        <ListItemWrapper>
          <CustomAvatar shadow='warning' isList>
            <StatIcon type='mvp' />
          </CustomAvatar>
          <ListItemText
            primary={mvp.map((pl, i) => (
              <CustomTypography bold key={pl.player_id._id} div>
                {pl.player_id.name}
              </CustomTypography>
            ))}
          />
        </ListItemWrapper>
      </ListWrapper>
    </SectionBackground>
  ) : (
    <CustomTypography>No mvp</CustomTypography>
  );
};

export default MvpDisplay;
