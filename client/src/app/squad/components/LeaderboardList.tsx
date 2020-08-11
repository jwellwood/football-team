import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { ILeaderboardStat } from '../shared/types';
import { ListWrapper, ListItemWrapper } from 'components/lists';
import { CustomAvatar } from 'components/avatars';
import { CustomTypography } from 'components/typography';

interface Props {
  leaderboardValue: any;
}

const LeaderboardList: React.FC<Props> = ({ leaderboardValue }) => {
  return (
    <ListWrapper>
      {leaderboardValue.map((player: ILeaderboardStat, i: number) => {
        let background = 'transparent';

        switch (i) {
          case 0:
            background = 'first';
            break;
          case 1:
            background = 'second';
            break;
          case 2:
            background = 'third';
            break;
          default:
            break;
        }

        return (
          <ListItemWrapper key={player.name + i}>
            <CustomAvatar background={background} isList>
              {i + 1}
            </CustomAvatar>

            <ListItemText
              primary={
                <CustomTypography main bold>
                  {player.name}
                </CustomTypography>
              }
            />
            <ListItemSecondaryAction>
              <CustomTypography main bold>
                {player.stat}
              </CustomTypography>
            </ListItemSecondaryAction>
          </ListItemWrapper>
        );
      })}
    </ListWrapper>
  );
};

export default LeaderboardList;
