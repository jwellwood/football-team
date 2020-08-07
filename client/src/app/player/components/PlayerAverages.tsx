import React from 'react';
import SectionContainer from 'shared/layout/SectionContainer';
import { IPlayerAveragesTableData } from '../shared/types';
import CenteredGrid from 'lib/components/grids/CenteredGrid';
import GridItem from 'lib/components/grids/GridItem';
import CustomTypography from 'lib/components/typography/CustomTypography';

interface Props {
  tables: IPlayerAveragesTableData[];
}

const PlayerAverages: React.FC<Props> = ({ tables }) => {
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
