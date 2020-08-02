import React from 'react';
import { useSelector } from 'react-redux';
// MUI
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// Routes
import { admin_routes } from 'router';
// Internal
import ListWrapper from 'components/ui/lists/ListWrapper';
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';
import DeleteTrophyLogic from './DeleteTrophyLogic';
import SectionContainer from 'shared/layout/SectionContainer';

const AdminTrophiesList = () => {
  const trophies = useSelector((state) => state.team.teamData.trophies);
  const displayTrophies = trophies.sort((a, b) => (a.year > b.year ? -1 : 1));

  return (
    <SectionContainer link={admin_routes.ADMIN_TROPHIES_ADD} text='Add'>
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
    </SectionContainer>
  );
};

export default AdminTrophiesList;
