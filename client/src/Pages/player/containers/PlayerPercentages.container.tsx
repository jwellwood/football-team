import React, { useMemo } from 'react';
import { getTotals, getContributions } from 'functions/player';
import SectionContainer from 'shared/layout/SectionContainer';
import { IPlayer, IResult } from 'shared/types';
import { IBarGraphData } from 'lib/chartjs';
import HorizontalBarGraph from 'lib/components/graphs/HorizontalBarGraph';
import TargetProgress from 'lib/components/graphs/CircularGraph';
import CenteredGrid from 'lib/components/grids/CenteredGrid';

interface Props {
  player: IPlayer;
  results: IResult[];
}

interface IPlayerPercentagesListData {
  title: string;
  percent: number;
}

const PlayerPercentages: React.FC<Props> = ({ player, results }) => {
  const playerTotals = useMemo(() => getTotals(player), [player]);
  const contributions = useMemo(() => getContributions(player, results), [
    player,
    results,
  ]);

  const graphData: IBarGraphData = {
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

  const data: IPlayerPercentagesListData[] = [
    { title: 'Played', percent: contributions.apps },
    { title: 'Won', percent: playerTotals.winPercentage },
    { title: 'Contribution', percent: contributions.overall },
  ];

  return (
    <SectionContainer title='Percentages'>
      <CenteredGrid dir='row' item='flex-start'>
        {data.map((item: IPlayerPercentagesListData, i) => (
          <TargetProgress key={i} percentage={item.percent} type={item.title} />
        ))}
      </CenteredGrid>
      <HorizontalBarGraph data={graphData} />
    </SectionContainer>
  );
};

export default PlayerPercentages;
