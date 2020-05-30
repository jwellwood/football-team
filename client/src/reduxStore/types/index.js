// App Actions
export const SHOW_MESSAGE = 'SHOW_MESSAGE';

// *******************USER********************
// Auth
export const GET_AUTH = 'GET_AUTH';
// Registration
export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const CHECK_CURRENT_PASSWORD = 'CHECK_CURRENT_PASSWORD';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const DELETE_USER = 'DELETE_USER';
export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const VERIFY_EMAIL = 'VERIFY_EMAIL';
// User
export const UPDATE_USER_ACCOUNT = 'UPDATE_USER_ACCOUNT';
export const UPDATE_PLAYER_DETAILS = 'UPDATE_PLAYER_DETAILS';
export const UPDATE_PLAYER_TARGETS = 'UPDATE_PLAYER_TARGETS';
export const UPDATE_USER_IMAGE = 'UPDATE_USER_IMAGE';
export const UPLOAD_USER_IMAGE = 'UPLOAD_USER_IMAGE';
export const REMOVE_USER_IMAGE = 'REMOVE_USER_IMAGE';

// *******************VISITOR********************
// Squad
export const GET_ALL_PLAYERS = 'GET_ALL_PLAYERS';
export const GET_PLAYER_BY_ID = 'GET_PLAYER_BY_ID';
// Result
export const GET_ALL_RESULTS = 'GET_ALL_RESULTS';
export const GET_RESULT_BY_ID = 'GET_RESULT_BY_ID';
export const GET_RESULTS_WITHOUT_FORFEITS = 'GET_RESULTS_WITHOUT_FORFEITS';
// Team
export const GET_TEAM = 'GET_TEAM';
export const GET_PREVIOUS_SEASONS = 'GET_PREVIOUS_SEASONS';
export const GET_PREVIOUS_SEASON_BY_ID = 'GET_PREVIOUS_SEASON_BY_ID';

// *******************ADMIN********************
// User
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_USER_BY_ID = 'GET_USER_BY_ID';
export const SET_PERMISSIONS = 'SET_PERMISSIONS';
export const RESET_IMAGE = 'RESET_IMAGE';
// Result
export const ADD_RESULT = 'ADD_RESULT';
export const UPDATE_RESULT = 'UPDATE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';
export const ADD_MATCH_PLAYER = 'ADD_MATCH_PLAYER';
export const DELETE_MATCH_PLAYER = 'DELETE_MATCH_PLAYER';
// Team
export const ADD_TEAM = 'ADD_TEAM';
export const UPDATE_TEAM_DETAILS = 'UPDATE_TEAM_DETAILS';
export const UPLOAD_TEAM_PHOTO = 'UPLOAD_TEAM_PHOTO';
export const UPDATE_TEAM_PHOTO = 'UPDATE_TEAM_PHOTO';
export const REMOVE_ADMIN_IMAGE = 'REMOVE_ADMIN_IMAGE';
// Trophy
export const ADD_NEW_TROPHY = 'ADD_NEW_TROPHY';
export const DELETE_TROPHY = 'DELETE_TROPHY';
// HOF
export const ADD_HALL_OF_FAMER = 'ADD_HALL_OF_FAMER';
export const UDPATE_HALL_OF_FAMER = 'UDPATE_HALL_OF_FAMER';
export const DELETE_HALL_OF_FAMER = 'DELETE_HALL_OF_FAMER';
// Prev season
export const ADD_PREVIOUS_SEASON = 'ADD_PREVIOUS_SEASON';
export const UPDATE_PREVIOUS_SEASON = 'UPDATE_PREVIOUS_SEASON';
export const DELETE_PREVIOUS_SEASON = 'DELETE_PREVIOUS_SEASON';
export const ADD_PREVIOUS_AWARD = 'ADD_PREVIOUS_AWARD';
export const DELETE_PREVIOUS_AWARD = 'DELETE_PREVIOUS_AWARD';
