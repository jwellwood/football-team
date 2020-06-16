import React from 'react';
import CustomTypography from 'components/ui/text/CustomTypography';

const MatchReport = ({ result }) => {
  const { matchReport } = result;
  return matchReport ? (
    <CustomTypography size='sm'>{matchReport}</CustomTypography>
  ) : (
    <CustomTypography>No match report</CustomTypography>
  );
};

export default MatchReport;
