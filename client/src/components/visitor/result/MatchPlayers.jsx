import React from 'react';
// MUITODO
import Grid from '@material-ui/core/Grid';
// Components
import StatIcon from 'components/ui/icons/StatIcon';
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import CustomText from 'components/ui/text/CustomText';

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

  const forfeitText = isForfeit ? (
    <CustomText type='placeholder' text='Match forfeited' />
  ) : null;

  const playersList = players.length ? (
    players.map((player) => {
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
            <CustomText type='secondary'>{player_id.name}</CustomText>
          </Grid>
          <Grid item xs={8} sm={9}>
            {iconArr}
          </Grid>
        </CenteredGrid>
      );
    })
  ) : (
    <CustomText type='placeholder' text='No players yet' />
  );

  return isForfeit ? forfeitText : playersList;
};

export default MatchPlayers;
