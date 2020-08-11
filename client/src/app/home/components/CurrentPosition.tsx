import React from 'react';
import { generateOrdinals } from 'utils/helpers/generateOrdinals';
import { CenteredGrid } from 'shared/layout/grids';
import { CustomTypography } from 'components/typography';

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
