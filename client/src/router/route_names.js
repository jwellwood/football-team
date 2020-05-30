// Visitor routes
export const NOT_FOUND = '*';
export const HOME = '/';
export const TEAM = '/team';
export const RESULTS = '/results';
export const SQUAD = '/squad';
export const ABOUT = '/about';
export const PLAYER = '/squad/:id';
export const RESULT = '/results/:id';
export const RESULTS_STATS = '/stats/results';
export const PLAYERS_STATS = '/stats/players';
export const PREVIOUS_SEASON = '/previous_seasons';
// Registration routes
export const SIGN_IN = '/sign_in';
export const FORGOT_PASSWORD = '/forgot_password';
export const RESET_REQUESTED = '/reset_requested';
export const RESET_PASSWORD = '/reset_password/:token';
export const EMAIL_VALIDATED = '/verify_email/:token';

// User routes
export const PROFILE = '/profile';
export const EDIT_USER = `${PROFILE}/edit_user`;
export const EDIT_PLAYER = `${PROFILE}/edit_player`;
export const EDIT_TARGETS = `${PROFILE}/edit_targets`;
export const EDIT_PROFILE_IMAGE = `${PROFILE}/edit_profile_image`;
export const CHANGE_PASSWORD = `${PROFILE}/change_password`;

// Admin links
export const ADMIN = '/admin'; // AdminPage
// Admin Views
export const ADMIN_USERS = `${ADMIN}/users`; // AdminUsersPage
export const ADMIN_RESULTS = `${ADMIN}/results`; // AdminResultsPage
export const ADMIN_TROPHIES = `${ADMIN}/trophies`; // AdminTrophiesPage
export const ADMIN_HOF = `${ADMIN}/hof`; // AdminHOFPage
export const ADMIN_PREVIOUS_SEASON = `${ADMIN}/previous_season`; // AdminPreviousSeasonsPage
// Add
export const ADMIN_RESULTS_ADD = `${ADMIN_RESULTS}/add`; // AddResultPage
export const ADMIN_TROPHIES_ADD = `${ADMIN_TROPHIES}/add`; // // AddTrophyPage
export const ADMIN_TEAM_ADD = `${ADMIN}/team/add`; // TeamAddPage
export const ADMIN_HOF_ADD = `${ADMIN_HOF}/add`; // AddHOFPage
export const ADMIN_MATCH_PLAYERS_ADD = `${ADMIN_RESULTS}/:id/players/add`;
export const ADMIN_PREVIOUS_SEASON_ADD = `${ADMIN_PREVIOUS_SEASON}/add`;
export const ADMIN_PREVIOUS_AWARD_ADD = `${ADMIN_PREVIOUS_SEASON}/:id/awards/add`;
// Edit
export const ADMIN_TEAM_EDIT = `${ADMIN}/team/edit`; // TeamEditPage
export const ADMIN_TEAM_EDIT_PHOTO = `${ADMIN}/team/edit_photo`; // TeamEditPhotoPage
export const ADMIN_RESULTS_EDIT = `${ADMIN_RESULTS}/edit/:id`; // EditResultPage
export const ADMIN_HOF_EDIT = `${ADMIN_HOF}/edit/:id`; // EditHOFPage
export const ADMIN_USER_PERMISSIONS_EDIT = `${ADMIN_USERS}/:id`; //
export const ADMIN_PREVIOUS_SEASON_EDIT = `${ADMIN_PREVIOUS_SEASON}/edit/:id`;
