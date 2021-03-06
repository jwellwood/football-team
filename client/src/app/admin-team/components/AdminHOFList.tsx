import React from 'react';
import { useSelector } from 'react-redux';
// MUI
import ListItemText from '@material-ui/core/ListItemText';
// Routes
import { admin_routes } from 'router';
// Internal
import { ListWrapper, ListItemWrapper } from 'components/lists';
import { SectionContainer } from 'shared/layout/containers';
import { IHallOfFame } from 'shared/types';
import { RootState } from 'reduxStore/rootReducer';

const AdminHOFList: React.FC = () => {
  const team = useSelector((state: RootState) => state.team.data);
  const hallOfFame = team.hallOfFame || [];

  return (
    <SectionContainer text='Add' link={admin_routes.ADMIN_HOF_ADD}>
      <ListWrapper>
        {hallOfFame.map((hallOfFamer: IHallOfFame) => {
          const { _id, name, yearInducted, yearJoined, yearLeft } = hallOfFamer;
          return (
            <ListItemWrapper
              key={_id}
              button
              linkTo={`${admin_routes.ADMIN_HOF}/edit/${_id}`}
            >
              <ListItemText
                primary={`${name}, ${yearInducted}`}
                secondary={`${yearJoined} - ${yearLeft}`}
              />
            </ListItemWrapper>
          );
        })}
      </ListWrapper>
    </SectionContainer>
  );
};

export default AdminHOFList;
