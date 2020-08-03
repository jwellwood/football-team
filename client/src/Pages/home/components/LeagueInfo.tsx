import React, { lazy, Suspense } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { visitor_routes } from 'router';
import { ITeam } from 'shared/types';
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import Spinner from 'components/ui/loading/Spinner';

const CurrentPosition = lazy(() => import('./CurrentPosition'));
const LatestResult = lazy(() => import('../containers/LatestResult.container'));

interface Props {
  team: ITeam;
}

const LeagueInfo: React.FC<Props> = ({ team }) => {
  const { position, league } = team || {};

  const latestResult = <LatestResult />;

  return (
    <Suspense fallback={<Spinner isButton />}>
      <Link underline='none' component={RouterLink} to={visitor_routes.RESULTS}>
        <CenteredGrid dir='row'>
          <Grid item xs={6}>
            <CenteredGrid>{latestResult}</CenteredGrid>
          </Grid>
          <Grid item xs={6}>
            <CenteredGrid>
              <CurrentPosition position={position} league={league} />
            </CenteredGrid>
          </Grid>
        </CenteredGrid>
      </Link>
    </Suspense>
  );
};

export default LeagueInfo;
