import React from 'react';
import { generateOrdinals } from 'shared/utils/generateOrdinals';
import CenteredGrid from 'lib/components/grids/CenteredGrid';
import CustomTypography from 'lib/components/typography/CustomTypography';

interface Props {
  position: string;
  league: string;
}

const CurrentPosition: React.FC<Props> = ({ position, league }) => {
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
