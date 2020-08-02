import React from 'react';
// Components
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import GridItem from 'components/ui/grids/GridItem';
import SectionContainer from 'shared/layout/SectionContainer';
import CustomTypography from 'components/ui/text/CustomTypography';

const PlayerAverages = ({ tables }) => {
  return (
    <SectionContainer title='Averages'>
      <CenteredGrid dir='row' item='flex-start'>
        {tables.map((table) => (
          <GridItem key={table.title} sm={12}>
            <div style={{ marginBottom: '10px' }}>
              <CustomTypography div>{table.title}</CustomTypography>
            </div>
            {table.component}
          </GridItem>
        ))}
      </CenteredGrid>
    </SectionContainer>
  );
};

export default PlayerAverages;
