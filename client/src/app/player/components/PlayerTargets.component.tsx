import React from 'react';
import { getPercentage } from 'utils/helpers';
import SectionContainer from 'shared/layout/SectionContainer';
import { IPlayerTargetsData } from '../shared/types';
import CenteredGrid from 'lib/components/grids/CenteredGrid';
import TargetProgress from 'lib/components/graphs/CircularGraph';

interface Props {
  targetsData: IPlayerTargetsData[];
}

const TargetsOverview: React.FC<Props> = ({ targetsData }) => {
  return (
    <SectionContainer title='Targets'>
      <CenteredGrid dir='row'>
        {targetsData.map((item, i) => {
          const percentage: number = getPercentage(
            item.value,
            item.secondary,
            0
          );
          return (
            <TargetProgress
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
