import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import { SectionBackground } from 'shared/layout/containers';
import { CustomAvatar } from 'components/avatars';
import StatIcon from 'lib/icons/StatIcon';
import { CustomTypography } from 'components/typography';
import { ListWrapper, ListItemWrapper } from 'components/lists';

interface Props {
  mvp: IMvpData[];
}

interface IMvpData {
  player_id: {
    _id: string;
    name: string;
  };
}

const MvpDisplay: React.FC<Props> = ({ mvp }) => {
  return mvp.length ? (
    <SectionBackground>
      <ListWrapper>
        <ListItemWrapper>
          <CustomAvatar shadow='warning' isList>
            <StatIcon type='mvp' />
          </CustomAvatar>
          <ListItemText
            primary={mvp.map((pl, i: number) => (
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
