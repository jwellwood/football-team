import React from 'react';
// MUITODO
import {
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
} from '@material-ui/core';
// assets
import { theme } from 'shared/theme';
// Components
import HorizontalBarGraph from 'lib/components/graphs/HorizontalBarGraph';
import SectionContainer from 'shared/layout/SectionContainer';
import ListWrapper from 'lib/components/lists/ListWrapper';
import ListItemWrapper from 'lib/components/lists/ListItemWrapper';
import StatIcon from 'lib/components/icons/StatIcon';
import CustomTypography from 'lib/components/typography/CustomTypography';

const TeamTargets = ({ teamTargets, teamTotals, percentages }) => {
  const { warning, success } = theme.palette;
  const listData = [
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

  const backgroundColor = (value) =>
    value < 100 ? warning.main : success.main;

  const data = {
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
          backgroundColor(percentages.apps),
          backgroundColor(percentages.goals),
          backgroundColor(percentages.assists),
          backgroundColor(percentages.overall),
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <SectionContainer title='Team'>
      <HorizontalBarGraph data={data} />
      {listData.map((item, i) => (
        <ListWrapper dense key={i}>
          <ListItemWrapper>
            {item.icon ? (
              <ListItemIcon>
                <StatIcon type={item.icon} isList />
              </ListItemIcon>
            ) : null}
            <ListItemText primary={item.title} />
            <ListItemSecondaryAction>
              <CustomTypography main bold>
                {item.total} / {item.target}
              </CustomTypography>
            </ListItemSecondaryAction>
          </ListItemWrapper>
        </ListWrapper>
      ))}
    </SectionContainer>
  );
};

export default TeamTargets;
