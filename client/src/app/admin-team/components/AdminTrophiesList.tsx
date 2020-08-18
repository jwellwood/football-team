import React from 'react';
import { useSelector } from 'react-redux';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { admin_routes } from 'router';
import { SectionContainer } from 'shared/layout/containers';
import { ITrophy } from 'shared/types';
import { ListWrapper, ListItemWrapper } from 'components/lists';
import { RootState } from 'reduxStore/rootReducer';
import DeleteTrophy from '../containers/DeleteTrophy.container';

const AdminTrophiesList: React.FC = () => {
  const trophies: ITrophy[] = useSelector(
    (state: RootState) => state.team.data.trophies
  );
  const displayTrophies: ITrophy[] = trophies.sort((a, b) =>
    a.year > b.year ? -1 : 1
  );

  return (
    <SectionContainer link={admin_routes.ADMIN_TROPHIES_ADD} text='Add'>
      <ListWrapper dense>
        {displayTrophies.map((trophy: ITrophy) => {
          const { name, year, opponent, isWinner, isFinal } = trophy;
          return (
            <ListItemWrapper key={name + year}>
              <ListItemText
                primary={`${name}, ${isFinal ? opponent : ''}`}
                secondary={`${year}, ${isWinner ? 'Winner' : 'Runner-up'}`}
              />
              <ListItemSecondaryAction>
                <DeleteTrophy trophy={trophy} />
              </ListItemSecondaryAction>
            </ListItemWrapper>
          );
        })}
      </ListWrapper>
    </SectionContainer>
  );
};

export default AdminTrophiesList;
