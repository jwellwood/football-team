import React from 'react';
// MUITODO
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// Internal
import ListWrapper from 'components/ui/lists/ListWrapper';
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';
import CustomAvatar from 'lib/components/avatars/CustomAvatar';
import CustomTypography from 'lib/components/typography/CustomTypography';

const LeaderboardList = ({ value }) => {
  return (
    <ListWrapper>
      {value.map((player, i) => {
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
