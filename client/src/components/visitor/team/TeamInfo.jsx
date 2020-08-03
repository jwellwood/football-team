import React from 'react';
// MUITODO
import ListItemText from '@material-ui/core/ListItemText';
// Internal
import ListWrapper from 'components/ui/lists/ListWrapper';
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';
import CustomIcon from 'lib/components/icons/CustomIcon';
import CustomAvatar from 'lib/components/avatars/CustomAvatar';

const TeamInfo = ({ team }) => {
  const { location, league, position } = team;
  const details = [
    { title: 'Location', icon: 'globe-americas', value: location },
    { title: 'League', icon: 'bookmark', value: league },
    {
      title: 'League Position',
      icon: 'certificate',
      value: position,
    },
  ];
  return (
    <ListWrapper>
      {details.map((item) => (
        <ListItemWrapper key={item.title}>
          <CustomAvatar background='secondary' isList>
            <CustomIcon icon={item.icon} size='xs' />
          </CustomAvatar>
          <ListItemText primary={item.value} secondary={item.title} />
        </ListItemWrapper>
      ))}
    </ListWrapper>
  );
};

export default TeamInfo;
