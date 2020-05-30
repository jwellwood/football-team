import { lazy } from 'react';

import {
  PROFILE,
  EDIT_USER,
  EDIT_PLAYER,
  EDIT_TARGETS,
  EDIT_PROFILE_IMAGE,
  CHANGE_PASSWORD,
} from 'router/route_names';

const ProfilePage = lazy(() => import('Pages/user/ProfilePage'));
const EditAccountPage = lazy(() => import('Pages/user/EditAccountPage'));
const EditPlayerPage = lazy(() => import('Pages/user/EditPlayerPage'));
const EditTargetsPage = lazy(() => import('Pages/user/EditTargetsPage'));
const EditUserImagePage = lazy(() => import('Pages/user/EditUserImagePage'));
const ChangePasswordPage = lazy(() => import('Pages/user/ChangePasswordPage'));

export const userRoutes = [
  { path: PROFILE, component: ProfilePage },
  { path: EDIT_USER, component: EditAccountPage },
  { path: EDIT_PLAYER, component: EditPlayerPage },
  { path: EDIT_TARGETS, component: EditTargetsPage },
  { path: EDIT_PROFILE_IMAGE, component: EditUserImagePage },
  { path: CHANGE_PASSWORD, component: ChangePasswordPage },
];
