import {
  GET_TEAM,
  // ADMIN
  ADD_TEAM,
  UPDATE_TEAM_DETAILS,
  UPDATE_TEAM_PHOTO,
  ADD_NEW_TROPHY,
  DELETE_TROPHY,
  ADD_HALL_OF_FAMER,
  UDPATE_HALL_OF_FAMER,
  DELETE_HALL_OF_FAMER,
  UPLOAD_TEAM_PHOTO,
  REMOVE_ADMIN_IMAGE,
  // Prev seasons
  GET_PREVIOUS_SEASONS,
  GET_PREVIOUS_SEASON_BY_ID,
  ADD_PREVIOUS_SEASON,
  UPDATE_PREVIOUS_SEASON,
  DELETE_PREVIOUS_SEASON,
  ADD_PREVIOUS_AWARD,
  DELETE_PREVIOUS_AWARD,
} from '../types';

export const teamReducer = function (state = {}, action) {
  switch (action.type) {
    case GET_TEAM:
      return {
        ...state,
        success: action.payload.success,
        teamData: action.payload.data,
      };
    // Admin
    case ADD_TEAM:
      return { ...state, message: action.payload };
    case UPDATE_TEAM_DETAILS:
      return { ...state, message: action.payload };
    case UPDATE_TEAM_PHOTO:
      return { ...state, message: action.payload };
    // Trophy
    case ADD_NEW_TROPHY:
      return { ...state, message: action.payload };
    case DELETE_TROPHY:
      return { ...state, message: action.payload };
    // HOF
    case ADD_HALL_OF_FAMER:
      return { ...state, message: action.payload };
    case UDPATE_HALL_OF_FAMER:
      return { ...state, message: action.payload };
    case DELETE_HALL_OF_FAMER:
      return { ...state, message: action.payload };
    // IMAGES
    case UPLOAD_TEAM_PHOTO:
      return { ...state, message: action.payload };
    case REMOVE_ADMIN_IMAGE:
      return { ...state, message: action.payload };
    // PREVIOUS SEASONS
    case GET_PREVIOUS_SEASONS:
      return { ...state, message: action.payload };
    case GET_PREVIOUS_SEASON_BY_ID:
      return { ...state, message: action.payload };
    case ADD_PREVIOUS_SEASON:
      return { ...state, message: action.payload };
    case UPDATE_PREVIOUS_SEASON:
      return { ...state, message: action.payload };
    case DELETE_PREVIOUS_SEASON:
      return { ...state, message: action.payload };
    case ADD_PREVIOUS_AWARD:
      return { ...state, message: action.payload };
    case DELETE_PREVIOUS_AWARD:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};
