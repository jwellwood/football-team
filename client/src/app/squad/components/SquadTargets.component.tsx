import React from 'react';
import {
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
} from '@material-ui/core';
import { theme } from 'lib/theme';
import SectionContainer from 'shared/layout/SectionContainer';
import {
  ISquadTargets,
  ISquadTotals,
  ISquadPercentages,
} from '../shared/types';
import { IBarGraphData } from 'lib/chartjs';
import HorizontalBarGraph from 'lib/components/graphs/HorizontalBarGraph';
import ListWrapper from 'lib/components/lists/ListWrapper';
import ListItemWrapper from 'lib/components/lists/ListItemWrapper';
import StatIcon from 'lib/components/icons/StatIcon';
import CustomTypography from 'lib/components/typography/CustomTypography';

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
  const { warning, success } = theme.palette;
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
      icon: null,
      total: teamTotals.totalOverall,
      target: teamTargets.targetTotal,
    },
  ];

  const backgroundColor = (value: number): string =>
    value < 100 ? warning.main : success.main;

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
        backgroundColor: [
          backgroundColor(+percentages.apps),
          backgroundColor(+percentages.goals),
          backgroundColor(+percentages.assists),
          backgroundColor(+percentages.overall),
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <SectionContainer title='Team'>
      <HorizontalBarGraph data={data} />
      {listData.map((item: ICircleGraphData, i) => (
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
