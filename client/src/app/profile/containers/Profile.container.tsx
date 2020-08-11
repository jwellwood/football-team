import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { IUserData } from 'shared/types';
import { Spinner } from 'components/loaders';
import { CustomTabs, ITab } from 'shared/layout/tabs';
import CustomIcon from 'lib/icons/CustomIcon';

const AccountDetails = lazy(() => import('../components/UserAccount'));
const PlayerDetails = lazy(() => import('../components/ImageAndInfo'));
const UserTargets = lazy(() => import('../components/UserTargets'));

export interface IAuthState {
  auth: any;
}

export default () => {
  const user: IUserData = useSelector(
    (state: IAuthState) => state.auth.userData
  );

  const tabs: ITab[] = [
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
    <Suspense fallback={<Spinner isSecondary />}>
      <CustomTabs tabs={tabs} />
    </Suspense>
  );
};
