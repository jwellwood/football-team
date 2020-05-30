import React from 'react';
import { useSelector } from 'react-redux';
// MUI
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// Routes
import { ADMIN_TROPHIES_ADD } from 'router/route_names';
// Internal
import ListWrapper from 'components/ui/lists/ListWrapper';
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';
import DeleteTrophyLogic from './DeleteTrophyLogic';
import SectionTitle from 'components/ui/headers/SectionTitle';
import GreyBackground from 'containers/GreyBackground';

const AdminTrophiesList = () => {
  const trophies = useSelector((state) => state.team.teamData.trophies);
  const displayTrophies = trophies.sort((a, b) => (a.year > b.year ? -1 : 1));

  return (
    <GreyBackground>
      <SectionTitle title='' link={ADMIN_TROPHIES_ADD} text='Add' />
      <ListWrapper dense>
        {displayTrophies.map((trophy) => {
          const { name, year, opponent, isWinner, isFinal } = trophy;
          return (
            <ListItemWrapper key={name + year}>
              <ListItemText
                primary={`${name}, ${isFinal ? opponent : ''}`}
                secondary={`${year}, ${isWinner ? 'Winner' : 'Runner-up'}`}
              />
              <ListItemSecondaryAction>
                <DeleteTrophyLogic trophy={trophy} />
              </ListItemSecondaryAction>
            </ListItemWrapper>
          );
        })}
      </ListWrapper>
    </GreyBackground>
  );
};

export default AdminTrophiesList;
