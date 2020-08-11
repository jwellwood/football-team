import React from 'react';
// Assets
import { theme } from 'lib/theme';
// Internal
import { LineGraph } from 'lib/chartjs/graphs';
import { ILineGraphData } from 'lib/chartjs';
import { Placeholder } from 'components/typography';
import { SectionContainer } from 'shared/layout/containers';
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
  if (results) {
    results.forEach((result, i: number) => {
      const data: IResultLineGraphData = {
        index: i + 1,
        opponentName: result.opponentName, // TODO include this as a tooltip?
        goalsFor: result.teamGoals,
        goalsAgainst: result.opponentGoals,
        points: result.points!,
      };
      resultData.unshift(data);
    });
  }

  const labels: number[] = resultData.map((res, i: number) => i + 1);
  const goalsFor: number[] = resultData.map((res: any) => res.goalsFor);
  const goalsAgainst: number[] = resultData.map((res: any) => res.goalsAgainst);
  const goalDiff: number[] = resultData.map(
    (res: any) => res.goalsFor - res.goalsAgainst
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
    <Placeholder />
  );
};

export default ResultLineGraph;
