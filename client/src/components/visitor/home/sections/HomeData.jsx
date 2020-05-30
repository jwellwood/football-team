import React, { lazy, Suspense } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// MUI
import Grid from '@material-ui/core/Grid';
// Components
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import Link from '@material-ui/core/Link';
import { RESULTS } from 'router/route_names';
import Spinner from 'components/ui/loading/Spinner';
import PlaceholderText from 'components/ui/text/Placeholder';

const CurrentPosition = lazy(() => import('./CurrentPosition'));
const LatestResult = lazy(() => import('./LatestResult'));

const HomeData = ({ team, results }) => {
  const { position, league } = team || {};

  const latestResult =
    results && results.length ? (
      <LatestResult result={results[0]} />
    ) : (
      <PlaceholderText />
    );

  return (
    <Suspense fallback={<Spinner isButton />}>
      <Link underline='none' component={RouterLink} to={RESULTS}>
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

export default HomeData;
