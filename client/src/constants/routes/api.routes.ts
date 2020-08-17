import * as server from './server.routes';

const user = server.USER_SERVER;
const pub = server.PUBLIC_SERVER;
const admin = server.ADMIN_SERVER;

export const authAPIRoutes = {
  GET_AUTH_ROUTE: `${user}/get_auth`,
  SIGN_UP_ROUTE: `${user}/sign_up`,
  SIGN_IN_ROUTE: `${user}/sign_in`,
  SIGN_OUT_ROUTE: `${user}/sign_out`,
  CHECK_CURRENT_PASSWORD_ROUTE: `${user}/check_current_password`,
  UPDATE_PASSWORD_ROUTE: `${user}/update_password`,
  UPDATE_USER_ACCOUNT_ROUTE: `${user}/update_user_account`,
  DELETE_USER_ROUTE: `${user}/delete_user`,
  FORGOT_PASSWORD_ROUTE: `${pub}/forgot_password`,
  RESET_PASSWORD_ROUTE: `${pub}/reset_password`,
  VERIFY_EMAIL_ROUTE: `${pub}/verify_email`,
};

export const teamAPIRoutes = {
  GET_TEAM_ROUTE: `${pub}/get_team`,
  ADD_TEAM_ROUTE: `${admin}/add_team`,
  UPDATE_TEAM_DETAILS_ROUTE: `${admin}/update_team_details`,
  UPDATE_TEAM_PHOTO_ROUTE: `${admin}/update_team_photo`,
  ADD_HOF_ROUTE: `${admin}/add_hall_of_famer`,
  UPDATE_HOF_ROUTE: `${admin}/update_hall_of_famer`,
  DELETE_HOF_ROUTE: `${admin}/delete_hall_of_famer`,
  ADD_TROPHY_ROUTE: `${admin}/add_new_trophy`,
  DELETE_TROPHY_ROUTE: `${admin}/delete_trophy`,
  UPLOAD_TEM_PHOTO_ROUTE: `${admin}/upload_team_photo`,
  REMOVE_ADMIN_IMAGE_ROUTE: `${admin}/remove_admin_image?public_id=`,
};

export const seasonAPIRoutes = {
  GET_PREVIOUS_SEASONS_ROUTE: `${pub}/get_previous_seasons`,
  GET_SEASON_ROUTE: `${pub}/get_previous_season_by_id`,
  ADD_PREVIOUS_SEASON_ROUTE: `${admin}/add_previous_season`,
  UPDATE_PREVIOUS_SEASON_ROUTE: `${admin}/update_previous_season`,
  DELETE_PREVIOUS_SEASON_ROUTE: `${admin}/delete_previous_season`,
  ADD_PREVIOUS_SEASON_AWARD_ROUTE: `${admin}/add_previous_award`,
  DELETE_PREVIOUS_SEASON_AWARD_ROUTE: `${admin}/delete_previous_award`,
};

export const squadAPIRoutes = {
  GET_ALL_PLAYERS_ROUTE: `${pub}/get_all_players`,
  GET_PLAYER_ROUTE: `${pub}/get_player_by_id`,
};

export const userAPIRoutes = {
  UPDATE_PLAYER_DETAILS_ROUTE: `${user}/update_player_details`,
  UPDATE_PLAYER_TARGETS_ROUTE: `${user}/update_player_targets`,
  UPDATE_USER_IMAGE_ROUTE: `${user}/update_user_image`,
  UPLOAD_USER_IMAGE_ROUTE: `${user}/upload_user_image`,
  REMOVE_USER_IMAGE_ROUTE: `${user}/remove_user_image?public_id=`,
  GET_ALL_USERS_ROUTE: `${admin}/get_all_users`,
  GET_USER_ROUTE: `${admin}/get_user_by_id`,
  SET_PERMISSIONS_ROUTE: `${admin}/set_permissions`,
  RESET_IMAGE_ROUTE: `${admin}/reset_image`,
};

export const resultAPIRoutes = {
  GET_ALL_RESULTS_ROUTE: `${pub}/get_all_results`,
  GET_RESULT_ROUTE: `${pub}/get_result_by_id`,
  UPDATE_RESULT_ROUTE: `${admin}/update_result`,
  ADD_RESULT_ROUTE: `${admin}/add_result`,
  DELETE_RESULT_ROUTE: `${admin}/delete_result`,
  ADD_MATCH_PLAYER_ROUTE: `${admin}/add_match_player`,
  DELETE_MATCH_PLAYER_ROUTE: `${admin}/delete_match_player`,
};
