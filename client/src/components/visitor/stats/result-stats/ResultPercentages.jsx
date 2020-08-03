import React, { useMemo } from 'react';
// Functions
import { getResultPercentages } from 'functions/results';
// Assets
import { theme } from 'shared/theme';
// Components
import ResultAverages from './ResultAverages';
import DonutGraph from 'components/ui/graphs/DonutGraph';
import PlaceholderText from 'components/ui/text/Placeholder';
import CenteredGrid from 'lib/components/grids/CenteredGrid';
import GridItem from 'lib/components/grids/GridItem';
import SectionContainer from 'shared/layout/SectionContainer';

const ResultPercentages = ({ results }) => {
  const { success, warning, primary, secondary } = theme.palette;
  const percentages = useMemo(() => getResultPercentages(results), [results]);

  const data = {
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
    <PlaceholderText />
  );
};

export default ResultPercentages;
