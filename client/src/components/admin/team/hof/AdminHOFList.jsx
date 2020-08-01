import React from 'react';
import { useSelector } from 'react-redux';
// MUI
import ListItemText from '@material-ui/core/ListItemText';
// Routes
import { admin_routes } from 'router';
// Internal
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';
import ListWrapper from 'components/ui/lists/ListWrapper';
import SectionContainer from 'containers/SectionContainer';

const AdminHOFList = () => {
  const hallOfFame = useSelector((state) => state.team.teamData.hallOfFame);

  return (
    <SectionContainer text='Add' link={admin_routes.ADMIN_HOF_ADD}>
      <ListWrapper>
        {hallOfFame.map((hallOfFamer) => {
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
