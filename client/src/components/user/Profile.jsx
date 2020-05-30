import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
// Components
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import Spinner from 'components/ui/loading/Spinner';
const AccountDetails = lazy(() => import('./account/AccountDetails'));
const PlayerDetails = lazy(() => import('./player/PlayerDetails'));
const TargetDetails = lazy(() => import('./targets/TargetsDetails'));

const Profile = () => {
  const user = useSelector((state) => state.auth.userData);
  return (
    <Suspense fallback={<Spinner isButton />}>
      <PlayerDetails user={user} />
      <CenteredGrid dir='row' item='stretch'>
        <TargetDetails user={user} />
        <AccountDetails user={user} />
      </CenteredGrid>
    </Suspense>
  );
};

export default Profile;
