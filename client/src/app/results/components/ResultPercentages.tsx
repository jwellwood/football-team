import React, { useMemo } from 'react';
import { getResultPercentages } from '../functions';
import { theme } from 'lib/theme';
import { IResult } from 'shared/types';
import { SectionContainer } from 'shared/layout/containers';
import { DonutGraph } from 'lib/chartjs/graphs';
import { IDonutGraphData } from 'lib/chartjs';
import { Placeholder } from 'components/typography';
import { CenteredGrid, GridItem } from 'shared/layout/grids';
import ResultAverages from './ResultAverages';

interface Props {
  results: IResult[];
}

interface IResultPercentages {
  drawPercentage: string;
  lossPercentage: string;
  winPercentage: string;
}

const ResultPercentages: React.FC<Props> = ({ results }) => {
  const { success, warning, primary, secondary } = theme.palette;
  const percentages: IResultPercentages = useMemo(
    () => getResultPercentages(results),
    [results]
  );

  const data: IDonutGraphData = {
    labels: ['Win', 'Draw', 'Lose'],
    datasets: [
      {
        data: [
          percentages.winPercentage,
          percentages.drawPercentage,
          percentages.lossPercentage,
        ],
        backgroundColor: [success.light, warning.light, primary.light],
        borderColor: secondary.dark,
      },
    ],
  };

  return results.length ? (
    <CenteredGrid dir='row' item='stretch'>
      <GridItem sm={6}>
        <SectionContainer title='Overview'>
          <DonutGraph data={data} />
        </SectionContainer>
      </GridItem>
      <GridItem sm={6}>
        <SectionContainer title='Averages'>
          <ResultAverages results={results} />
        </SectionContainer>
      </GridItem>
    </CenteredGrid>
  ) : (
    <Placeholder />
  );
};

export default ResultPercentages;
