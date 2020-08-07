import React from 'react';
import { parseDate, getResultsColors } from 'shared/utils';
import CustomTypography from 'lib/components/typography/CustomTypography';

interface Props {
  date: string;
  points: number;
  teamGoals: number;
  opponentGoals: number;
  opponentName: string;
  isForfeit: boolean;
}

const LatestResult: React.FC<Props> = ({
  date,
  points,
  teamGoals,
  opponentGoals,
  opponentName,
  isForfeit,
}) => {
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
