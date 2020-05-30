import { lazy } from 'react';

import {
  ADMIN,
  ADMIN_USERS,
  ADMIN_RESULTS,
  ADMIN_TROPHIES,
  ADMIN_HOF,
  ADMIN_RESULTS_ADD,
  ADMIN_TROPHIES_ADD,
  ADMIN_HOF_ADD,
  ADMIN_RESULTS_EDIT,
  ADMIN_TEAM_EDIT,
  ADMIN_TEAM_EDIT_PHOTO,
  ADMIN_HOF_EDIT,
  ADMIN_MATCH_PLAYERS_ADD,
  ADMIN_USER_PERMISSIONS_EDIT,
  ADMIN_PREVIOUS_SEASON,
  ADMIN_PREVIOUS_SEASON_ADD,
  ADMIN_PREVIOUS_SEASON_EDIT,
  ADMIN_PREVIOUS_AWARD_ADD,
  ADMIN_TEAM_ADD,
} from 'router/route_names';

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

export const adminRoutes = [
  // Users
  { path: ADMIN_USERS, component: AdminUsersPage },
  // Trophy
  { path: ADMIN_TROPHIES, component: AdminTrophiesPage },
  { path: ADMIN_TROPHIES_ADD, component: AddTrophyPage },
  // HOF
  { path: ADMIN_HOF_EDIT, component: EditHOFPage },
  { path: ADMIN_HOF_ADD, component: AddHOFPage },
  { path: ADMIN_HOF, component: AdminHOFPage },
  // Seasons
  { path: ADMIN_PREVIOUS_SEASON, component: AdminPreviousSeasonsPage },
  { path: ADMIN_PREVIOUS_SEASON_ADD, component: AddPreviousSeasonPage },
  { path: ADMIN_PREVIOUS_SEASON_EDIT, component: EditPrevSeasonPage },
  { path: ADMIN_PREVIOUS_AWARD_ADD, component: AddSeasonAwardPage },
  // Edit
  { path: ADMIN_USER_PERMISSIONS_EDIT, component: EditUserPermissionsPage },
  { path: ADMIN_TEAM_EDIT_PHOTO, component: EditTeamPhotoPage },
  { path: ADMIN_TEAM_EDIT, component: EditTeamPage },
  { path: ADMIN_RESULTS_EDIT, component: EditResultPage },
  // Add
  { path: ADMIN_RESULTS_ADD, component: AddResultPage },
  { path: ADMIN_MATCH_PLAYERS_ADD, component: AddMatchPlayerPage },
  { path: ADMIN_TEAM_ADD, component: AddTeamPage },
  // Views
  { path: ADMIN_RESULTS, component: AdminResultsPage },
  // Links
  { path: ADMIN, component: AdminPage },
];
