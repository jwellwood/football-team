import React, { useMemo, ReactElement } from 'react';
// MUITODO
import ListItemText from '@material-ui/core/ListItemText';
// Functions
import { getTotals } from 'functions/player';
// Routes
import { visitor_routes } from 'router';
// assets
import profile_default from 'shared/assets/images/default_profile.png';
// Components
import CenteredGrid from 'lib/components/grids/CenteredGrid';
import GridItem from 'lib/components/grids/GridItem';
import ListItemWrapper from 'lib/components/lists/ListItemWrapper';
import CustomImageAvatar from 'lib/components/avatars/CustomImageAvatar';
import StatBoxes from './StatBoxes';
import CustomTypography from 'lib/components/typography/CustomTypography';
import { IPlayer, IPlayerStats } from 'shared/types';
import { IStatBoxDetails } from '../shared/types';

interface Props {
  player: IPlayer;
}

const PlayerListItem: React.FC<Props> = ({ player }) => {
  const { _id, name, squadNumber, position, isCaptain, image } = player;
  const profileImage: string =
    image.url === 'default' ? profile_default : image.url;

  const stats: IPlayerStats = useMemo(() => getTotals(player), [player]);

  const details: IStatBoxDetails[] = [
    { text: 'Pl', value: stats.apps },
    { text: 'G', value: stats.goals },
    { text: 'A', value: stats.assists },
  ];
  // We want to show different stats if the player is a goalkeeper.
  // If the player hasn't played, show the avg as 0
  const gkDetails: IStatBoxDetails[] = [
    { text: 'Pl', value: stats.apps },
    { text: 'C', value: stats.conceded },
    {
      text: 'C/G',
      value: stats.apps ? (stats.conceded / stats.apps).toFixed(1) : 0,
    },
  ];

  const statBoxDetails: IStatBoxDetails[] =
    position === 'GK' ? gkDetails : details;

  const playerName: ReactElement = (
    <CustomTypography main bold>
      {name}
    </CustomTypography>
  );

  const playerNumber: ReactElement = (
    <CustomTypography color='warning' bold>
      {squadNumber}{' '}
      {isCaptain ? (
        <CustomTypography color='error'>(C)</CustomTypography>
      ) : null}
    </CustomTypography>
  );

  return (
    <CenteredGrid dir='row' just='space-between'>
      <GridItem xs={6} sm={9} md={9}>
        <ListItemWrapper button linkTo={`${visitor_routes.SQUAD}/${_id}`}>
          <CustomImageAvatar
            imageUrl={profileImage}
            alt={`${name} profile`}
            bordered
            isList
          />
          <ListItemText primary={playerName} secondary={playerNumber} />
        </ListItemWrapper>
      </GridItem>
      <StatBoxes statBoxDetails={statBoxDetails} />
    </CenteredGrid>
  );
};

export default PlayerListItem;
