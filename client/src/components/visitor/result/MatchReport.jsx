import React from 'react';
import CustomText from 'components/ui/text/CustomText';

const MatchReport = ({ result }) => {
  const { matchReport } = result;
  return matchReport ? (
    <CustomText type='muted'>{matchReport}</CustomText>
  ) : (
    <CustomText type='placeholder' text='No match report' />
  );
};

export default MatchReport;
