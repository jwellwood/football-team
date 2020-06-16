import React from 'react';
import { useSelector } from 'react-redux';
// Internal
import Team from './Team';
import CustomTypography from 'components/ui/text/CustomTypography';

const TeamLogic = () => {
  const team = useSelector((state) => state.team.teamData);
  return team ? (
    <Team team={team} />
  ) : (
    <CustomTypography>No team</CustomTypography>
  );
};

export default TeamLogic;
