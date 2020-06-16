import React, { useMemo } from 'react';
// Functions
import {
  getTotals,
  getContributions,
  // getPenaltyTotals,
} from 'functions/player';
// Components
import HorizontalBarGraph from 'components/ui/graphs/HorizontalBarGraph';
import SectionContainer from 'containers/SectionContainer';

const PlayerPercentages = ({ player, results }) => {
  const playerTotals = useMemo(() => getTotals(player), [player]);
  const contributions = useMemo(() => getContributions(player, results), [
    player,
    results,
  ]);
  // const penalties = getPenaltyTotals(player, results);

  const data = {
    labels: [
      'Played',
      'Win',
      'Goal in',
      'Assist in',
      'Goal / Assist in',
      'Goal & Assist in',
      'Contribution',
    ],
    datasets: [
      {
        data: [
          contributions.apps,
          playerTotals.winPercentage,
          contributions.goals,
          contributions.assists,
          contributions.either,
          contributions.both,
          contributions.overall,
        ],
      },
    ],
  };
  // { TODO
  //   // <li>Pen %: {penalties.penScoredPercent}%</li>
  //   // <li>Pens of team taken {penalties.percentOfTeamPensTaken}%</li>
  // }

  return (
    <SectionContainer title='Percentages'>
      <HorizontalBarGraph data={data} />
    </SectionContainer>
  );
};

export default PlayerPercentages;
