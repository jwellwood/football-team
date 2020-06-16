import React from 'react';
// MUITODO
import Grid from '@material-ui/core/Grid';
// Components
import StatIcon from 'components/ui/icons/StatIcon';
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import CustomTypography from 'components/ui/text/CustomTypography';

const mapIcons = (num, type) => {
  const statArr = [];
  for (let i = 0; i < num; i++) {
    statArr.push(
      <span
        style={{ display: 'inline-flex', margin: '0px 2px' }}
        key={type + i}
      >
        <StatIcon type={type} size='sm' />
      </span>
    );
  }
  return statArr;
};

const MatchPlayers = ({ result }) => {
  const { players, isForfeit } = result;

  const orderedPlayers = players.sort(
    (a, b) => b.goals + b.assists - (a.goals + a.assists)
  );

  const forfeitText = isForfeit ? (
    <CustomTypography>Match forfeited</CustomTypography>
  ) : null;

  const playersList = players.length ? (
    orderedPlayers.map((player) => {
      const {
        player_id,
        goals,
        assists,
        conceded,
        ownGoals,
        pensScored,
        pensMissed,
        yellowCards,
        redCard,
      } = player;

      const iconArr = [];
      const getArray = (item, icon, color) => {
        if (item) {
          iconArr.push(mapIcons(+item, icon, color));
        }
      };

      const items = [
        // goals -pens scored so it doesn't appear as two goals
        { value: +goals - pensScored, icon: 'goal' },
        { value: +pensScored, icon: 'penScored' },
        { value: +assists, icon: 'assist' },
        { value: +conceded, icon: 'conceded' },
        { value: +ownGoals, icon: 'ownGoal' },
        { value: +pensMissed, icon: 'penMissed' },
        { value: +yellowCards, icon: 'yellowCard' },
        { value: redCard, icon: 'redCard' },
      ];
      items.forEach((item) => getArray(item.value, item.icon));

      return (
        <CenteredGrid key={player._id} dir='row' just='space-between'>
          <Grid item xs={4} sm={3}>
            <CustomTypography>{player_id.name}</CustomTypography>
          </Grid>
          <Grid item xs={8} sm={9}>
            {iconArr}
          </Grid>
        </CenteredGrid>
      );
    })
  ) : (
    <CustomTypography>No players yet</CustomTypography>
  );

  return isForfeit ? forfeitText : playersList;
};

export default MatchPlayers;
