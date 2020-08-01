import { lazy } from 'react';
import { user_routes as routes } from './paths';
import { IRoute } from 'shared/types';

const ProfilePage = lazy(() => import('Pages/user/ProfilePage'));
const EditAccountPage = lazy(() => import('Pages/user/EditAccountPage'));
const EditPlayerPage = lazy(() => import('Pages/user/EditPlayerPage'));
const EditTargetsPage = lazy(() => import('Pages/user/EditTargetsPage'));
const EditUserImagePage = lazy(() => import('Pages/user/EditUserImagePage'));
const ChangePasswordPage = lazy(() => import('Pages/user/ChangePasswordPage'));

export const userRoutes: IRoute[] = [
  { path: routes.PROFILE, component: ProfilePage },
  { path: routes.EDIT_USER, component: EditAccountPage },
  { path: routes.EDIT_PLAYER, component: EditPlayerPage },
  { path: routes.EDIT_TARGETS, component: EditTargetsPage },
  { path: routes.EDIT_PROFILE_IMAGE, component: EditUserImagePage },
  { path: routes.CHANGE_PASSWORD, component: ChangePasswordPage },
];
