import React from 'react';
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import { generateOrdinals } from 'components/utils/generateOrdinals';
import CustomTypography from 'components/ui/text/CustomTypography';

const CurrentPosition = ({ position, league }) => {
  return (
    <CenteredGrid>
      <CustomTypography main bold>
        {position}
        {generateOrdinals(+position)}
      </CustomTypography>

      <CustomTypography size='sm'>{league}</CustomTypography>
    </CenteredGrid>
  );
};

export default CurrentPosition;
