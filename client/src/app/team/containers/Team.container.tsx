import React from 'react';
import { useSelector } from 'react-redux';
// Internal
import Team from '../components/Team.component';
import { CustomTypography } from 'components/typography';
import { ITeam } from 'shared/types';
import { RootState } from 'reduxStore/rootReducer';

export default () => {
  const team: ITeam = useSelector((state: RootState) => state.team.teamData);
  return team ? (
    <Team team={team} />
  ) : (
    <CustomTypography>No team</CustomTypography>
  );
};
