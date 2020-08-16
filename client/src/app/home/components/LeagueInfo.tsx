import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { visitor_routes } from 'router';
import { ITeam } from 'shared/types';
import { generateOrdinals } from 'utils/helpers/generateOrdinals';
import { CustomTypography } from 'components/typography';
import { ListWrapper, ListItemWrapper } from 'components/lists';
import {
  ListItemText,
  ListItemSecondaryAction,
  Container,
} from '@material-ui/core';
import { CustomAvatar } from 'components/avatars';

interface Props {
  team: ITeam;
}

const LeagueInfo: React.FC<Props> = ({ team }) => {
  const { position, league, currentSeason } = team || {};

  return (
    <Link underline='none' component={RouterLink} to={visitor_routes.RESULTS}>
      <Container maxWidth='xs'>
        <ListWrapper>
          <ListItemWrapper>
            <ListItemText
              primary={<CustomTypography bold>{league}</CustomTypography>}
              secondary={
                <CustomTypography main bold>
                  {currentSeason}
                </CustomTypography>
              }
            />
            <ListItemSecondaryAction>
              <CustomAvatar shadow='success'>
                <CustomTypography main bold>
                  {position}
                  {generateOrdinals(+position)}
                </CustomTypography>
              </CustomAvatar>
            </ListItemSecondaryAction>
          </ListItemWrapper>
        </ListWrapper>
      </Container>
    </Link>
  );
};

export default LeagueInfo;
