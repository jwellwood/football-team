import React, { ReactElement } from 'react';
import { ListItemText, Grid } from '@material-ui/core';
import { IResult, IMatchPlayer } from 'shared/types';
import StatIcon from 'lib/components/icons/StatIcon';
import CustomTypography from 'lib/components/typography/CustomTypography';
import ListWrapper from 'components/ui/lists/ListWrapper';
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';
import CenteredGrid from 'lib/components/grids/CenteredGrid';

interface Props {
  result: IResult;
}
// TODO
// interface IIconArray {
//   item: number | boolean;
//   icon: string;
// }

const mapIcons = (num: number, type: string) => {
  const statArr: Array<ReactElement> = [];
  for (let i: number = 0; i < num; i++) {
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

const MatchPlayers: React.FC<Props> = ({ result: { players, isForfeit } }) => {
  const orderedPlayers: IMatchPlayer[] = players.sort(
    (a, b) => b.goals + b.assists - (a.goals + a.assists)
  );

  const forfeitText: ReactElement = isForfeit ? (
    <CustomTypography>Match forfeited</CustomTypography>
  ) : null;

  const playersList = players.length ? (
    orderedPlayers.map(
      ({
        player_id,
        goals,
        assists,
        conceded,
        ownGoals,
        pensScored,
        pensMissed,
        yellowCards,
        redCard,
      }) => {
        //TODO
        const iconArr = [];
        const getArray = (item, icon) => {
          if (item) {
            iconArr.push(mapIcons(+item, icon));
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

        const listText: ReactElement = (
          <CenteredGrid dir='row' just='flex-start'>
            <Grid item xs={7}>
              <StatIcon type='app' size='sm' />{' '}
              <CustomTypography main size='sm' bold>
                {player_id.name}
              </CustomTypography>
            </Grid>
            <Grid item xs={5}>
              {iconArr}
            </Grid>
          </CenteredGrid>
        );

        return (
          <ListItemWrapper key={player_id._id}>
            <ListItemText primary={listText} />
          </ListItemWrapper>
        );
      }
    )
  ) : (
    <CustomTypography>No players yet</CustomTypography>
  );

  return isForfeit ? (
    forfeitText
  ) : (
    <ListWrapper dense>{playersList}</ListWrapper>
  );
};

export default MatchPlayers;
