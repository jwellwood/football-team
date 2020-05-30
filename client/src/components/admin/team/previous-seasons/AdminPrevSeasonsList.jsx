import React from 'react';
// MUI
import ListItemText from '@material-ui/core/ListItemText';
// Routes
import {
  ADMIN_PREVIOUS_SEASON,
  ADMIN_PREVIOUS_SEASON_ADD,
} from 'router/route_names';
// Components
import ListWrapper from 'components/ui/lists/ListWrapper';
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';
import GreyBackground from 'containers/GreyBackground';
import SectionTitle from 'components/ui/headers/SectionTitle';

const AdminPrevSeasonsList = ({ seasons }) => {
  return (
    <GreyBackground>
      <SectionTitle title='' link={ADMIN_PREVIOUS_SEASON_ADD} text='Add' />
      <ListWrapper>
        {seasons.map((season, i) => (
          <ListItemWrapper
            key={season._id}
            button
            linkTo={`${ADMIN_PREVIOUS_SEASON}/edit/${season._id}`}
          >
            <ListItemText primary={season.seasonName} secondary={season.year} />
          </ListItemWrapper>
        ))}
      </ListWrapper>
    </GreyBackground>
  );
};

export default AdminPrevSeasonsList;
