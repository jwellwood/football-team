import { lazy } from 'react';
import { user_routes as routes } from './paths';
import { IRoute } from 'shared/types';

const ProfilePage = lazy(() => import('Pages/profile/pages/Profile.page'));
const EditAccountPage = lazy(() =>
  import('Pages/profile/pages/EditAccount.page')
);
const EditPlayerPage = lazy(() =>
  import('Pages/profile/pages/EditPlayer.page')
);
const EditTargetsPage = lazy(() =>
  import('Pages/profile/pages/EditTargets.page')
);
const EditUserImagePage = lazy(() =>
  import('Pages/profile/pages/EditUserImage.page')
);
const ChangePasswordPage = lazy(() =>
  import('Pages/profile/pages/ChangePassword.page')
);

export const userRoutes: IRoute[] = [
  { path: routes.PROFILE, component: ProfilePage },
  { path: routes.EDIT_USER, component: EditAccountPage },
  { path: routes.EDIT_PLAYER, component: EditPlayerPage },
  { path: routes.EDIT_TARGETS, component: EditTargetsPage },
  { path: routes.EDIT_PROFILE_IMAGE, component: EditUserImagePage },
  { path: routes.CHANGE_PASSWORD, component: ChangePasswordPage },
];
