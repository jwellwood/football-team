import React, { useMemo } from 'react';
// MUITODO
import ListItemText from '@material-ui/core/ListItemText';
// Functions
import { getTotals } from 'functions/player';
// Routes
import { SQUAD } from 'router/route_names';
// assets
import profile_default from 'assets/images/default_profile.png';
// Components
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import GridItem from 'components/ui/grids/GridItem';
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';
import CustomImageAvatar from 'components/ui/avatars/CustomImageAvatar';
import CustomText from 'components/ui/text/CustomText';
import ValueText from 'components/ui/text/ValueText';
import StatBoxes from './StatBoxes';

const PlayerListItem = ({ player }) => {
  const { _id, name, squadNumber, position, isCaptain, image } = player;
  const profileImage = image.url === 'default' ? profile_default : image.url;
  const stats = useMemo(() => getTotals(player), [player]);
  const details = [
    { text: 'Pl', value: stats.apps },
    { text: 'G', value: stats.goals },
    { text: 'A', value: stats.assists },
  ];
  // We want to show different stats if the player is a goalkeeper.
  // If the player hasn't played, show the avg as 0
  const gkDetails = [
    { text: 'Pl', value: stats.apps },
    { text: 'C', value: stats.conceded },
    {
      text: 'C/G',
      value: stats.apps ? (stats.conceded / stats.apps).toFixed(1) : 0,
    },
  ];

  const detailsToShow = position === 'GK' ? gkDetails : details;

  const playerName = <ValueText>{name}</ValueText>;

  const playerNumber = (
    <CustomText type='red'>
      {squadNumber}{' '}
      {isCaptain ? <CustomText type='highlight'>(C)</CustomText> : null}
    </CustomText>
  );

  return (
    <CenteredGrid dir='row' just='space-between'>
      <GridItem xs={6} sm={9} md={9}>
        <ListItemWrapper button linkTo={`${SQUAD}/${_id}`}>
          <CustomImageAvatar
            image={profileImage}
            alt={`${name} profile`}
            bordered
            isList
          />
          <ListItemText primary={playerName} secondary={playerNumber} />
        </ListItemWrapper>
      </GridItem>
      <StatBoxes detailsToShow={detailsToShow} />
    </CenteredGrid>
  );
};

export default PlayerListItem;
