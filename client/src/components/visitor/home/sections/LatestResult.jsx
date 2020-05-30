import React from 'react';
// Functions
import { parseDate, getResultsColors } from 'components/utils';
// Components
import CustomText from 'components/ui/text/CustomText';
import ValueText from 'components/ui/text/ValueText';

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
      <CustomText type='muted'>Latest Result</CustomText>

      <div
        style={{
          color: getResultsColors(points),
          fontSize: '30px',
          fontWeight: 'bold',
        }}
      >
        {teamGoals} - {opponentGoals}
      </div>
      <CustomText type='caption'>vs</CustomText>
      <ValueText>{isForfeit ? 'Forfeit' : opponentName}</ValueText>

      <CustomText type='caption'>{parseDate(date)}</CustomText>
    </>
  );
};

export default LatestResult;
