import React from 'react';
import { IResult } from 'shared/types';
import { CustomTypography } from 'components/typography';

interface Props {
  result: IResult;
}

const MatchReport: React.FC<Props> = ({ result: { matchReport } }) => {
  return matchReport ? (
    <CustomTypography size='sm'>{matchReport}</CustomTypography>
  ) : (
    <CustomTypography>No match report</CustomTypography>
  );
};

export default MatchReport;
