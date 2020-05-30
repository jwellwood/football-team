import React from 'react';
import { useSelector } from 'react-redux';
// MUI
import ListItemText from '@material-ui/core/ListItemText';
// Routes
import { ADMIN_HOF_ADD, ADMIN_HOF } from 'router/route_names';
// Internal
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';
import ListWrapper from 'components/ui/lists/ListWrapper';
import ProfileTitle from 'components/ui/headers/SectionTitle';
import GreyBackground from 'containers/GreyBackground';

const AdminHOFList = () => {
  const hallOfFame = useSelector((state) => state.team.teamData.hallOfFame);

  return (
    <GreyBackground>
      <ProfileTitle title='Hall of Fame' text='Add' link={ADMIN_HOF_ADD} />
      <ListWrapper>
        {hallOfFame.map((hallOfFamer) => {
          const { _id, name, yearInducted, yearJoined, yearLeft } = hallOfFamer;
          return (
            <ListItemWrapper
              key={_id}
              button
              linkTo={`${ADMIN_HOF}/edit/${_id}`}
            >
              <ListItemText
                primary={`${name}, ${yearInducted}`}
                secondary={`${yearJoined} - ${yearLeft}`}
              />
            </ListItemWrapper>
          );
        })}
      </ListWrapper>
    </GreyBackground>
  );
};

export default AdminHOFList;
