import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import SectionBackground from 'shared/layout/SectionBackground';
import CustomAvatar from 'lib/components/avatars/CustomAvatar';
import StatIcon from 'lib/components/icons/StatIcon';
import CustomTypography from 'lib/components/typography/CustomTypography';
import ListWrapper from 'components/ui/lists/ListWrapper';
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';

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
  console.log(mvp);
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
