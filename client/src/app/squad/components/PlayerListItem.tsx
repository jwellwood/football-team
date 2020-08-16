import React, { useMemo } from 'react';
// Functions
import { getTotals } from 'app/player/functions';
// Routes
import { visitor_routes } from 'router';
// Components
import { ListItemWrapper } from 'components/lists';
import StatBoxes from './StatBoxes';
import { IPlayer, IPlayerStats } from 'shared/types';
import { IStatBoxDetails } from '../shared/types';
import { ListItemSecondaryAction } from '@material-ui/core';
import PlayerListInfo from './PlayerListInfo';

interface Props {
  player: IPlayer;
}

const PlayerListItem: React.FC<Props> = ({ player }) => {
  const { _id, position } = player;

  const stats: IPlayerStats = useMemo(() => getTotals(player), [player]);

  const details: IStatBoxDetails[] = [
    { text: 'Pl', value: stats.apps, color: 'success' },
    { text: 'G', value: stats.goals, color: 'goal' },
    { text: 'A', value: stats.assists, color: 'assist' },
  ];
  // We want to show different stats if the player is a goalkeeper.
  // If the player hasn't played, show the avg as 0
  const gkDetails: IStatBoxDetails[] = [
    { text: 'Pl', value: stats.apps, color: 'success' },
    { text: 'C', value: stats.conceded, color: 'conceded' },
    {
      text: 'C/G',
      value: stats.apps ? (stats.conceded / stats.apps).toFixed(1) : 0,
      color: 'conceded',
    },
  ];

  const statBoxDetails: IStatBoxDetails[] =
    position === 'GK' ? gkDetails : details;

  return (
    <ListItemWrapper button linkTo={`${visitor_routes.SQUAD}/${_id}`}>
      <PlayerListInfo player={player} />
      <ListItemSecondaryAction>
        <StatBoxes statBoxDetails={statBoxDetails} />
      </ListItemSecondaryAction>
    </ListItemWrapper>
  );
};

export default PlayerListItem;
