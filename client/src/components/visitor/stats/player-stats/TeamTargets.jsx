import React from 'react';
// MUITODO
import Grid from '@material-ui/core/Grid';
// assets
import { theme } from 'assets/theme';
// Components
import GreyBackground from 'containers/GreyBackground';
import HorizontalBarGraph from 'components/ui/graphs/HorizontalBarGraph';
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import ValueText from 'components/ui/text/ValueText';
import CustomText from 'components/ui/text/CustomText';
import SectionSubtitle from 'components/ui/headers/SectionSubtitle';

const TeamTargets = ({ teamTargets, teamTotals, percentages }) => {
  const { warning, success } = theme.palette;
  const tableData = [
    {
      title: 'APPS',
      total: teamTotals.totalApps,
      target: teamTargets.targetApps,
    },
    {
      title: 'GOALS',
      total: teamTotals.totalGoals,
      target: teamTargets.targetGoals,
    },
    {
      title: 'ASSISTS',
      total: teamTotals.totalAssists,
      target: teamTargets.targetAssists,
    },
    {
      title: 'OVERALL',
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
    <>
      <SectionSubtitle title='Team' />
      <HorizontalBarGraph data={data} />
      <CenteredGrid dir='row'>
        {tableData.map((item, i) => (
          <Grid key={i} item xs={3} align='center'>
            <GreyBackground>
              <ValueText>{item.total}</ValueText>
              <CustomText type='muted'> /{item.target}</CustomText>
              <CustomText type='caption' div>
                {item.title}
              </CustomText>
            </GreyBackground>
          </Grid>
        ))}
      </CenteredGrid>
    </>
  );
};

export default TeamTargets;
