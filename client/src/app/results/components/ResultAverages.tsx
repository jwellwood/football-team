import React, { useMemo } from 'react';
import { getResultAverages } from '../functions';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { IResult } from 'shared/types';
import { ListWrapper, ListItemWrapper } from 'components/lists';
import CustomIcon from 'lib/icons/CustomIcon';
import { CustomTypography } from 'components/typography';

interface Props {
  results: IResult[];
}

interface IResultAverageData {
  text: string;
  value: number | string;
  noDivider?: boolean;
}

interface IResultAverageStats {
  avgConceded: number;
  avgDiff: string;
  avgGoals: number;
  pointsPerGame: number;
}

const ResultAverages: React.FC<Props> = ({ results }) => {
  const stats: IResultAverageStats = useMemo(() => getResultAverages(results), [
    results,
  ]);

  const { avgGoals, avgConceded, avgDiff, pointsPerGame } = stats;

  const data: IResultAverageData[] = [
    { text: 'Points / game', value: pointsPerGame, noDivider: true },
    { text: 'Goals / game', value: avgGoals },
    { text: 'Conceded / game', value: avgConceded },
    { text: 'Av goal difference', value: avgDiff },
  ];
  return (
    <ListWrapper dense>
      {data.map((item) => (
        <ListItemWrapper key={item.text} noDivider={item.noDivider}>
          <ListItemIcon>
            <CustomIcon icon='chevron-right' color='secondary' size='sm' />
          </ListItemIcon>
          <ListItemText primary={item.text} />
          <ListItemSecondaryAction>
            <CustomTypography main bold>
              {item.value}
            </CustomTypography>
          </ListItemSecondaryAction>
        </ListItemWrapper>
      ))}
    </ListWrapper>
  );
};

export default ResultAverages;
