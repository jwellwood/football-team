import { lazy } from 'react';
import { admin_routes as routes } from './paths';
import { IRoute } from 'shared/types';

// Results
const AdminResultsPage = lazy(() =>
  import('Pages/admin/result/AdminResultsPage')
);
const AddResultPage = lazy(() => import('Pages/admin/result/AddResultPage'));
const EditResultPage = lazy(() => import('Pages/admin/result/EditResultPage'));
const AddMatchPlayerPage = lazy(() =>
  import('Pages/admin/result/AddMatchPlayerPage')
);
// Team
const EditTeamPage = lazy(() => import('Pages/admin/team/EditTeamPage'));
const AddTeamPage = lazy(() => import('Pages/admin/team/AddTeamPage'));
const EditTeamPhotoPage = lazy(() =>
  import('Pages/admin/team/EditTeamPhotoPage')
);
// User
const AdminUsersPage = lazy(() => import('Pages/admin/user/AdminUsersPage'));
const EditUserPermissionsPage = lazy(() =>
  import('Pages/admin/user/EditUserPermissionsPage')
);
// Trophy
const AdminTrophiesPage = lazy(() =>
  import('Pages/admin/trophy/AdminTrophiesPage')
);
const AddTrophyPage = lazy(() => import('Pages/admin/trophy/AddTrophyPage'));
// HOF
const AdminHOFPage = lazy(() => import('Pages/admin/hof/AdminHOFPage'));
const AddHOFPage = lazy(() => import('Pages/admin/hof/AddHOFPage'));
const EditHOFPage = lazy(() => import('Pages/admin/hof/EditHOFPage'));
// Season
const AdminPreviousSeasonsPage = lazy(() =>
  import('Pages/admin/season/AdminPreviousSeasonsPage')
);
const AddPreviousSeasonPage = lazy(() =>
  import('Pages/admin/season/AddPreviousSeasonPage')
);
const EditPrevSeasonPage = lazy(() =>
  import('Pages/admin/season/EditPrevSeasonPage')
);
const AddSeasonAwardPage = lazy(() =>
  import('Pages/admin/season/AddSeasonAwardPage')
);
// ADMIN
const AdminPage = lazy(() => import('Pages/admin/AdminPage'));

export const adminRoutes: IRoute[] = [
  // Users
  { path: routes.ADMIN_USERS, component: AdminUsersPage },
  // Trophy
  { path: routes.ADMIN_TROPHIES, component: AdminTrophiesPage },
  { path: routes.ADMIN_TROPHIES_ADD, component: AddTrophyPage },
  // HOF
  { path: routes.ADMIN_HOF_EDIT, component: EditHOFPage },
  { path: routes.ADMIN_HOF_ADD, component: AddHOFPage },
  { path: routes.ADMIN_HOF, component: AdminHOFPage },
  // Seasons
  {
    path: routes.ADMIN_PREVIOUS_SEASON,
    component: AdminPreviousSeasonsPage,
  },
  {
    path: routes.ADMIN_PREVIOUS_SEASON_ADD,
    component: AddPreviousSeasonPage,
  },
  {
    path: routes.ADMIN_PREVIOUS_SEASON_EDIT,
    component: EditPrevSeasonPage,
  },
  {
    path: routes.ADMIN_PREVIOUS_AWARD_ADD,
    component: AddSeasonAwardPage,
  },
  // Edit
  {
    path: routes.ADMIN_USER_PERMISSIONS_EDIT,
    component: EditUserPermissionsPage,
  },
  { path: routes.ADMIN_TEAM_EDIT_PHOTO, component: EditTeamPhotoPage },
  { path: routes.ADMIN_TEAM_EDIT, component: EditTeamPage },
  { path: routes.ADMIN_RESULTS_EDIT, component: EditResultPage },
  // Add
  { path: routes.ADMIN_RESULTS_ADD, component: AddResultPage },
  { path: routes.ADMIN_MATCH_PLAYERS_ADD, component: AddMatchPlayerPage },
  { path: routes.ADMIN_TEAM_ADD, component: AddTeamPage },
  // Views
  { path: routes.ADMIN_RESULTS, component: AdminResultsPage },
  // Links
  { path: routes.ADMIN, component: AdminPage },
];
