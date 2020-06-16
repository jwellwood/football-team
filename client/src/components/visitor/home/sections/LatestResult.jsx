import React from 'react';
// Functions
import { parseDate, getResultsColors } from 'components/utils';
// Components
import CustomTypography from 'components/ui/text/CustomTypography';

const LatestResult = ({ result }) => {
  const {
    date,
    teamGoals,
    opponentGoals,
    opponentName,
    isForfeit,
    points,
  } = result;

  return (
    <>
      <CustomTypography>Latest Result</CustomTypography>

      <div
        style={{
          color: getResultsColors(points),
          fontSize: '30px',
          fontWeight: 'bold',
        }}
      >
        {teamGoals} - {opponentGoals}
      </div>
      <CustomTypography size='sm'>vs</CustomTypography>
      <CustomTypography size='md' bold main>
        {isForfeit ? 'Forfeit' : opponentName}
      </CustomTypography>

      <CustomTypography size='sm'>{parseDate(date)}</CustomTypography>
    </>
  );
};

export default LatestResult;
