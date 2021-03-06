import React, { useMemo } from 'react';
import { SectionContainer } from 'shared/layout/containers';
import { IPlayer, IResult } from 'shared/types';
import { IBarGraphData } from 'lib/chartjs';
import HorizontalBarGraph from 'lib/chartjs/graphs/HorizontalBarGraph';
import { CircularGraph } from 'lib/circular';
import { CenteredGrid } from 'shared/layout/grids';
import { getContributions, getTotals } from '../functions';
import { theme } from 'lib/theme';

interface Props {
  player: IPlayer;
  results: IResult[];
}

interface IPlayerPercentagesListData {
  title: string;
  percent: number;
}

const PlayerPercentages: React.FC<Props> = ({ player, results }) => {
  const { goal, assist, success, secondary } = theme.palette;
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
        backgroundColor: [goal.main, assist.main, secondary.main, success.main],
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
        {data.map((item: IPlayerPercentagesListData, i: number) => (
          <CircularGraph key={i} percentage={item.percent} type={item.title} />
        ))}
      </CenteredGrid>
      <HorizontalBarGraph data={graphData} />
    </SectionContainer>
  );
};

export default PlayerPercentages;
