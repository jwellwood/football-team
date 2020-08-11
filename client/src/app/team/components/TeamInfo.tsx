import React from 'react';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import ListItemText from '@material-ui/core/ListItemText';
import { ITeam } from 'shared/types';
import { ListWrapper, ListItemWrapper } from 'components/lists';
import CustomIcon from 'lib/icons/CustomIcon';
import { CustomAvatar } from 'components/avatars';

interface Props {
  team: ITeam;
}

interface ITeamInfoData {
  title: string;
  icon: IconName;
  value: string;
}

const TeamInfo: React.FC<Props> = ({
  team: { location, league, position },
}) => {
  const data: ITeamInfoData[] = [
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
      {data.map((item) => (
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
