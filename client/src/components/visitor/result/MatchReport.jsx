import React from 'react';
import CustomTypography from 'lib/components/typography/CustomTypography';

const MatchReport = ({ result }) => {
  const { matchReport } = result;
  return matchReport ? (
    <CustomTypography size='sm'>{matchReport}</CustomTypography>
  ) : (
    <CustomTypography>No match report</CustomTypography>
  );
};

export default MatchReport;
