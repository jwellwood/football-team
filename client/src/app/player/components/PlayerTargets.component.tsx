import React from 'react';
import { getPercentage } from 'utils/helpers';
import { SectionContainer } from 'shared/layout/containers';
import { IPlayerTargetsData } from '../shared/types';
import { CenteredGrid } from 'shared/layout/grids';
import { CircularGraph } from 'lib/circular';

interface Props {
  targetsData: IPlayerTargetsData[];
}

const TargetsOverview: React.FC<Props> = ({ targetsData }) => {
  return (
    <SectionContainer title='Targets'>
      <CenteredGrid dir='row'>
        {targetsData.map((item, i: number) => {
          const percentage: number = getPercentage(
            item.value,
            item.secondary,
            0
          );
          return (
            <CircularGraph
              key={i}
              percentage={percentage}
              type={item.title}
              total={item.value}
              target={item.secondary}
            />
          );
        })}
      </CenteredGrid>
    </SectionContainer>
  );
};

export default TargetsOverview;
