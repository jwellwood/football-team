import React from 'react';
// Components
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import GridItem from 'components/ui/grids/GridItem';
import SectionSubtitle from 'components/ui/headers/SectionSubtitle';

const PlayerAverages = ({ tables }) => {
  return (
    <CenteredGrid dir='row' item='flex-start'>
      {tables.map((table) => (
        <GridItem key={table.title} sm={12}>
          <SectionSubtitle title={table.title} />
          {table.component}
        </GridItem>
      ))}
    </CenteredGrid>
  );
};

export default PlayerAverages;
