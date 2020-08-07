import React from 'react';
import { useSelector } from 'react-redux';
// Internal
import Team from '../components/Team.component';
import CustomTypography from 'lib/components/typography/CustomTypography';
import { ITeam } from 'shared/types';

export default () => {
  const team: ITeam = useSelector((state) => state.team.teamData);
  return team ? (
    <Team team={team} />
  ) : (
    <CustomTypography>No team</CustomTypography>
  );
};
