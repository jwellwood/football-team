import React from 'react';
// Assets
import { theme } from 'shared/theme';
// Internal
import LineGraph from 'components/ui/graphs/LineGraph';
import PlaceholderText from 'components/ui/text/Placeholder';
import SectionContainer from 'shared/layout/SectionContainer';

const ResultLineGraph = ({ results }) => {
  const { success, error, secondary } = theme.palette;
  const resultData = [];
  results.forEach((result, i) => {
    const data = {
      index: i + 1,
      opponentName: result.opponentName, // TODO include this as a tooltip?
      goalsFor: result.teamGoals,
      goalsAgainst: result.opponentGoals,
      points: result.points,
    };
    resultData.unshift(data);
  });

  const labels = resultData.map((res, i) => i + 1);
  const goalsFor = resultData.map((res) => res.goalsFor);
  const goalsAgainst = resultData.map((res) => res.goalsAgainst);
  const goalDiff = resultData.map((res) => res.goalsFor - res.goalsAgainst);
  const data = {
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
        lineTension: 0,
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
