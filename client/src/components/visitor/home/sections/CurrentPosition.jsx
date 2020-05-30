import React from 'react';
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import CustomText from 'components/ui/text/CustomText';
import { generateOrdinals } from 'components/utils/generateOrdinals';
import ValueText from 'components/ui/text/ValueText';

const CurrentPosition = ({ position, league }) => {
  return (
    <CenteredGrid>
      <ValueText>
        {position}
        {generateOrdinals(+position)}
      </ValueText>

      <CustomText type='muted'>{league}</CustomText>
    </CenteredGrid>
  );
};

export default CurrentPosition;
