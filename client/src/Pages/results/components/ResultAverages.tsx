import React, { useMemo } from 'react';
import { getResultAverages } from 'functions/results';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { IResult } from 'shared/types';
import ListWrapper from 'components/ui/lists/ListWrapper';
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';
import CustomIcon from 'lib/components/icons/CustomIcon';
import CustomTypography from 'lib/components/typography/CustomTypography';

interface Props {
  results: IResult[];
}

interface IResultAverageData {
  text: string;
  value: string;
  noDivider?: boolean;
}

interface IResultAverageStats {
  avgConceded: string;
  avgDiff: string;
  avgGoals: string;
  pointsPerGame: string;
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
