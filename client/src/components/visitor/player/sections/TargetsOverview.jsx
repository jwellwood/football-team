import React from 'react';
// Functions
import { getPercentage } from 'functions';
// Layout
import CenteredGrid from 'components/ui/grids/CenteredGrid';
// Components
import TargetProgress from 'components/ui/progress/TargetProgress';
import SectionContainer from 'containers/SectionContainer';

const TargetsOverview = ({ data }) => {
  return (
    <SectionContainer title='Targets'>
      <CenteredGrid dir='row'>
        {data.map((item, i) => {
          const percentage = getPercentage(item.value, item.secondary, 0);
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
