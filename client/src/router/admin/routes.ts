import { lazy } from 'react';
import { admin_routes as routes } from './paths';
import { IRoute } from 'shared/types';

// Results
const AdminResultsPage = lazy(() =>
  import('Pages/admin-result/pages/AdminResults.page')
);
const AddResultPage = lazy(() =>
  import('Pages/admin-result/pages/AddResult.page')
);
const EditResultPage = lazy(() =>
  import('Pages/admin-result/pages/EditResult.page')
);
const AddMatchPlayerPage = lazy(() =>
  import('Pages/admin-result/pages/AddMatchPlayer.page')
);
// Team
const EditTeamPage = lazy(() => import('Pages/admin-team/pages/EditTeam.page'));
const AddTeamPage = lazy(() => import('Pages/admin-team/pages/AddTeam.page'));
const EditTeamPhotoPage = lazy(() =>
  import('Pages/admin-team/pages/EditTeamPhoto.page')
);
// User
const AdminUsersPage = lazy(() =>
  import('Pages/admin-user/pages/AdminUsers.page')
);
const EditUserPermissionsPage = lazy(() =>
  import('Pages/admin-user/pages/EditUserPermissions.page')
);
// Trophy
const AdminTrophiesPage = lazy(() =>
  import('Pages/admin-team/pages/AdminTrophies.page')
);
const AddTrophyPage = lazy(() =>
  import('Pages/admin-team/pages/AddTrophy.page')
);
// HOF
const AdminHOFPage = lazy(() =>
  import('Pages/admin-team/pages/AdminHallOfFame.Page')
);
const AddHOFPage = lazy(() =>
  import('Pages/admin-team/pages/AddHallOfFame.page')
);
const EditHOFPage = lazy(() =>
  import('Pages/admin-team/pages/EditHallOfFame.page')
);
// Season
const AdminPreviousSeasonsPage = lazy(() =>
  import('Pages/admin-team/pages/AdminPreviousSeasons.page')
);
const AddPreviousSeasonPage = lazy(() =>
  import('Pages/admin-team/pages/AddPreviousSeason.page')
);
const EditPrevSeasonPage = lazy(() =>
  import('Pages/admin-team/pages/EditPrevSeason.page')
);
const AddSeasonAwardPage = lazy(() =>
  import('Pages/admin-team/pages/AddSeasonAward.page')
);
// ADMIN
const AdminPage = lazy(() => import('Pages/admin-home/pages/Admin.page'));

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
