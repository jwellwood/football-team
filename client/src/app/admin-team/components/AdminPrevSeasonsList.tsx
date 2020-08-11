import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import { admin_routes } from 'router';
import { IPreviousSeason } from 'shared/types';
import { SectionContainer } from 'shared/layout/containers';
import { ListWrapper, ListItemWrapper } from 'components/lists';

interface Props {
  seasons: IPreviousSeason[];
}

const AdminPrevSeasonsList: React.FC<Props> = ({ seasons }) => {
  return (
    <SectionContainer link={admin_routes.ADMIN_PREVIOUS_SEASON_ADD} text='Add'>
      <ListWrapper>
        {seasons.map((season: IPreviousSeason, i: number) => (
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
