import React from 'react';
// Functions
import { getPercentage } from 'functions';
// Layout
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import GridItem from 'components/ui/grids/GridItem';
import GreyBackground from 'containers/GreyBackground';
// Components
import TargetProgress from 'components/ui/progress/TargetProgress';
import ValueText from 'components/ui/text/ValueText';
import SectionSubtitle from 'components/ui/headers/SectionSubtitle';
import CustomText from 'components/ui/text/CustomText';
import SectionContainer from 'containers/SectionContainer';

const TargetsOverview = ({ data }) => {
  return (
    <SectionContainer title='Targets'>
      <CenteredGrid dir='row'>
        {data.map((item) => {
          const percentage = getPercentage(item.value, item.secondary, 0);
          return (
            <GridItem key={item.icon} xs={4} sm={4} md={4} lg={4} xl={4}>
              <GreyBackground>
                <SectionSubtitle title={item.title} icon={item.icon} />
                <div style={{ maxWidth: '100px' }}>
                  <TargetProgress percentage={percentage}>
                    <ValueText variant='h6'>
                      {percentage}
                      <CustomText type='caption'>%</CustomText>
                    </ValueText>
                  </TargetProgress>
                </div>
                <ValueText>{item.value}</ValueText>
                <CustomText type='muted'> / {item.secondary}</CustomText>
              </GreyBackground>
            </GridItem>
          );
        })}
      </CenteredGrid>
    </SectionContainer>
  );
};

export default TargetsOverview;
