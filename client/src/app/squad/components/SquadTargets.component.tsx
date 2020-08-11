import React from 'react';
import {
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
} from '@material-ui/core';
import { theme } from 'lib/theme';
import { SectionContainer } from 'shared/layout/containers';
import {
  ISquadTargets,
  ISquadTotals,
  ISquadPercentages,
} from '../shared/types';
import { IBarGraphData } from 'lib/chartjs';
import HorizontalBarGraph from 'lib/chartjs/graphs/HorizontalBarGraph';
import { ListWrapper, ListItemWrapper } from 'components/lists';
import StatIcon from 'lib/icons/StatIcon';
import { CustomTypography } from 'components/typography';

interface Props {
  teamTargets: ISquadTargets;
  teamTotals: ISquadTotals;
  percentages: ISquadPercentages;
}

interface ICircleGraphData {
  title: string;
  icon: string;
  total: number;
  target: number;
}

const SquadTargets: React.FC<Props> = ({
  teamTargets,
  teamTotals,
  percentages,
}) => {
  const { goal, assist, warning, success } = theme.palette;
  const listData: ICircleGraphData[] = [
    {
      title: 'APPS',
      icon: 'app',
      total: teamTotals.totalApps,
      target: teamTargets.targetApps,
    },
    {
      title: 'GOALS',
      icon: 'goal',
      total: teamTotals.totalGoals,
      target: teamTargets.targetGoals,
    },
    {
      title: 'ASSISTS',
      icon: 'assist',
      total: teamTotals.totalAssists,
      target: teamTargets.targetAssists,
    },
    {
      title: 'OVERALL',
      icon: '',
      total: teamTotals.totalOverall,
      target: teamTargets.targetTotal,
    },
  ];

  const data: IBarGraphData = {
    labels: ['Apps', 'Goals', 'Assists', 'Overall'],
    datasets: [
      {
        data: [
          percentages.apps,
          percentages.goals,
          percentages.assists,
          percentages.overall,
        ],
        backgroundColor: [success.main, goal.main, assist.main, warning.main],
        borderWidth: 1,
      },
    ],
  };

  return (
    <SectionContainer title='Team'>
      <HorizontalBarGraph data={data} />
      {listData.map((item: ICircleGraphData, i: number) => (
        <ListWrapper dense key={item.title}>
          <ListItemWrapper>
            {item.icon ? (
              <ListItemIcon>
                <StatIcon type={item.icon} />
              </ListItemIcon>
            ) : null}
            <ListItemText primary={item.title} />
            <ListItemSecondaryAction>
              <CustomTypography main bold>
                {item.total}
                <CustomTypography> / {item.target}</CustomTypography>
              </CustomTypography>
            </ListItemSecondaryAction>
          </ListItemWrapper>
        </ListWrapper>
      ))}
    </SectionContainer>
  );
};

export default SquadTargets;
