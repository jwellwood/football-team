import React from 'react';
// MUI
import ListItemText from '@material-ui/core/ListItemText';
// Routes
import { admin_routes } from 'router';
// Components
import ListWrapper from 'lib/components/lists/ListWrapper';
import ListItemWrapper from 'lib/components/lists/ListItemWrapper';
import SectionContainer from 'shared/layout/SectionContainer';

const AdminPrevSeasonsList = ({ seasons }) => {
  return (
    <SectionContainer link={admin_routes.ADMIN_PREVIOUS_SEASON_ADD} text='Add'>
      <ListWrapper>
        {seasons.map((season, i) => (
          <ListItemWrapper
            key={season._id}
            button
            linkTo={`${admin_routes.ADMIN_PREVIOUS_SEASON}/edit/${season._id}`}
          >
            <ListItemText primary={season.seasonName} secondary={season.year} />
          </ListItemWrapper>
        ))}
      </ListWrapper>
    </SectionContainer>
  );
};

export default AdminPrevSeasonsList;