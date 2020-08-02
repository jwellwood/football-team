import React, { useMemo } from 'react';
// Functions
import { getTotals, getContributions } from 'functions/player';
// Components
import HorizontalBarGraph from 'components/ui/graphs/HorizontalBarGraph';
import SectionContainer from 'shared/layout/SectionContainer';
import TargetProgress from 'components/ui/progress/TargetProgress';
import CenteredGrid from 'components/ui/grids/CenteredGrid';

const PlayerPercentages = ({ player, results }) => {
  const playerTotals = useMemo(() => getTotals(player), [player]);
  const contributions = useMemo(() => getContributions(player, results), [
    player,
    results,
  ]);

  const graphData = {
    labels: ['Goal in', 'Assist in', 'Goal / Assist in', 'Goal & Assist in'],
    datasets: [
      {
        data: [
          contributions.goals,
          contributions.assists,
          contributions.either,
          contributions.both,
        ],
      },
    ],
  };

  const data = [
    { title: 'Played', percent: contributions.apps },
    { title: 'Won', percent: playerTotals.winPercentage },
    { title: 'Contribution', percent: contributions.overall },
  ];

  return (
    <SectionContainer title='Percentages'>
      <CenteredGrid dir='row' item='flex-start'>
        {data.map((item, i) => (
          <TargetProgress key={i} percentage={item.percent} type={item.title} />
        ))}
      </CenteredGrid>
      <HorizontalBarGraph data={graphData} />
    </SectionContainer>
  );
};

export default PlayerPercentages;
