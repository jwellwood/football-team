import React from 'react';
import { useSelector } from 'react-redux';
// Internal
import Team from './Team';
import CustomText from 'components/ui/text/CustomText';

const TeamLogic = () => {
  const team = useSelector((state) => state.team.teamData);
  return team ? (
    <Team team={team} />
  ) : (
    <CustomText type='placeholder' text='No team' />
  );
};

export default TeamLogic;
