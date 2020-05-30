import React from 'react';
// MUITODO
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// Internal
import ListWrapper from 'components/ui/lists/ListWrapper';
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';
import ValueText from 'components/ui/text/ValueText';
import CustomAvatar from 'components/ui/avatars/CustomAvatar';

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

            <ListItemText primary={player.name} />
            <ListItemSecondaryAction>
              <ValueText>{player.stat}</ValueText>
            </ListItemSecondaryAction>
          </ListItemWrapper>
        );
      })}
    </ListWrapper>
  );
};

export default LeaderboardList;
