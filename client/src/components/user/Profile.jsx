import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
// Components
import Spinner from 'components/ui/loading/Spinner';
import CustomTabs from 'components/ui/tabs/CustomTabs';
import CustomIcon from 'components/ui/icons/CustomIcon';
const AccountDetails = lazy(() => import('./account/AccountDetails'));
const PlayerDetails = lazy(() => import('./player/PlayerDetails'));
const TargetDetails = lazy(() => import('./targets/TargetsDetails'));

const Profile = () => {
  const user = useSelector((state) => state.auth.userData);

  const tabs = [
    {
      label: <CustomIcon icon='user' />,
      component: <PlayerDetails user={user} />,
    },
    {
      label: <CustomIcon icon='bullseye' />,
      component: <TargetDetails user={user} />,
    },
    {
      label: <CustomIcon icon='cog' />,
      component: <AccountDetails user={user} />,
    },
  ];

  return (
    <Suspense fallback={<Spinner isButton />}>
      <CustomTabs tabs={tabs} />
    </Suspense>
  );
};

export default Profile;
