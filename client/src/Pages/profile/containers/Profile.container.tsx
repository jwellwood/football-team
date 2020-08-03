import React, { lazy, Suspense, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { IUserData } from 'shared/types';
import Spinner from 'lib/components/loading/Spinner';
import CustomTabs from 'lib/components/tabs/CustomTabs';
import CustomIcon from 'lib/components/icons/CustomIcon';

const AccountDetails = lazy(() => import('../components/UserAccount'));
const PlayerDetails = lazy(() => import('../components/ImageAndInfo'));
const UserTargets = lazy(() => import('../components/UserTargets'));

interface ITabs {
  label: ReactElement;
  component: ReactElement;
}

export default () => {
  const user: IUserData = useSelector((state) => state.auth.userData);

  const tabs: ITabs[] = [
    {
      label: <CustomIcon icon='user' />,
      component: <PlayerDetails user={user} />,
    },
    {
      label: <CustomIcon icon='bullseye' />,
      component: <UserTargets user={user} />,
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
