import React from 'react';
// Assets
import { theme } from 'shared/theme';
// Internal
import LineGraph, { ILineGraphData } from 'lib/components/graphs/LineGraph';
import PlaceholderText from 'components/ui/text/Placeholder';
import SectionContainer from 'shared/layout/SectionContainer';
import { IResult } from 'shared/types';

interface Props {
  results: IResult[];
}

interface IResultLineGraphData {
  index: number;
  opponentName: string; // TODO include this as a tooltip?
  goalsFor: number;
  goalsAgainst: number;
  points: number;
}

const ResultLineGraph: React.FC<Props> = ({ results }) => {
  const { success, error, secondary } = theme.palette;
  const resultData: Array<IResultLineGraphData> = [];
  results.forEach((result, i) => {
    const data: IResultLineGraphData = {
      index: i + 1,
      opponentName: result.opponentName, // TODO include this as a tooltip?
      goalsFor: result.teamGoals,
      goalsAgainst: result.opponentGoals,
      points: result.points,
    };
    resultData.unshift(data);
  });

  const labels: number[] = resultData.map((res, i) => i + 1);
  const goalsFor: number[] = resultData.map((res) => res.goalsFor);
  const goalsAgainst: number[] = resultData.map((res) => res.goalsAgainst);
  const goalDiff: number[] = resultData.map(
    (res) => res.goalsFor - res.goalsAgainst
  );
  const data: ILineGraphData = {
    labels: [...labels],
    datasets: [
      {
        label: 'Goals',
        data: [...goalsFor],
        fill: false,
        borderColor: success.main,
        backgroundColor: success.light,
        borderWidth: 1,
      },
      {
        label: 'Conceded',
        data: [...goalsAgainst],
        fill: false,
        backgroundColor: error.main,
        borderColor: error.light,
        borderWidth: 1,
      },
      {
        label: 'Difference',
        data: [...goalDiff],
        backgroundColor: secondary.dark,
        borderColor: secondary.dark,
        borderWidth: 1,
      },
    ],
  };

  return results.length ? (
    <SectionContainer title='Game by Game'>
      <LineGraph data={data} />
    </SectionContainer>
  ) : (
    <PlaceholderText />
  );
};

export default ResultLineGraph;
