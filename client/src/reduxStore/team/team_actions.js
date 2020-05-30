// In this file
// 1  GET    / GET_TEAM              / getTeam
// 2  POST   / ADD_TEAM              / addTeam
// 3  PUT    / UDPATE_TEAM_DETAILS   / updateTeamDetails
// 4  PUT    / UDPATE_TEAM_PHOTO     / updateTeamPhoto
// 5  POST   / ADD_HALL_OF_FAMER     / addHallOfFamer
// 6  PUT    / UPDATE_HALL_OF_FAMER  / updateHallOfFamer
// 7  DELETE / DELETE_HALL_OF_FAMER  / deleteHallOfFamer
// 8  POST   / ADD_NEW_TROPHY        / addNewTrophy
// 9  DELETE / DELETE_TROPHY         / deleteTrophy
// 10 POST   / UPLOAD_TEAM_PHOTO     / uploadTeamPhoto
// 11 DELETE / REMOVE_ADMIN_IMAGE     / removeAdminImage

// Previous Seasons
// 1 / GET    / GET_PREVIOUS_SEASONS / getPreviousSeasons
// 2 / GET    / GET_PREVIOUS_SEASON_BY_ID / getPreviousSeasonById
// Admin
// 1 / POST   / ADD_PREVIOUS_SEASON / addPreviousSeason
// 2 / PUT    / UPDATE_PREVIOUS_SEASON / updatePreviousSeason
// 3 / DELETE / DELETE_PREVIOUS_SEASON / deletePreviousSeason
// 4 / POST   / ADD_PREVIOUS_AWARD / addPreviousAward
// 5 / DELETE / DELETE_PREVIOUS_AWARD / deletePreviousAward

import axios from 'axios';
import { ADMIN_SERVER, PUBLIC_SERVER } from '../types/routes';
import {
  GET_TEAM,
  ADD_TEAM,
  UPDATE_TEAM_DETAILS,
  UPDATE_TEAM_PHOTO,
  ADD_NEW_TROPHY,
  DELETE_TROPHY,
  ADD_HALL_OF_FAMER,
  DELETE_HALL_OF_FAMER,
  UDPATE_HALL_OF_FAMER,
  // Images
  UPLOAD_TEAM_PHOTO,
  REMOVE_ADMIN_IMAGE,
  GET_PREVIOUS_SEASONS,
  GET_PREVIOUS_SEASON_BY_ID,
  ADD_PREVIOUS_SEASON,
  UPDATE_PREVIOUS_SEASON,
  DELETE_PREVIOUS_SEASON,
  ADD_PREVIOUS_AWARD,
  DELETE_PREVIOUS_AWARD,
} from '../types';

// 1 GET / GET_TEAM / getTeam
export function getTeam() {
  const request = axios
    .get(`${PUBLIC_SERVER}/get_team`)
    .then((res) => res.data);
  return {
    type: GET_TEAM,
    payload: request,
  };
}
// 2 POST / ADD_TEAM / addTeam
export function addTeam(dataToSubmit) {
  const request = axios
    .post(`${ADMIN_SERVER}/add_team`, dataToSubmit)
    .then((res) => res.data);
  return {
    type: ADD_TEAM,
    payload: request,
  };
}

// 3 PUT / UDPATE_TEAM_DETAILS / updateTeamDetails
// Body: id, name, location, league, position,
export function updateTeamDetails(dataToSubmit) {
  const request = axios
    .put(`${ADMIN_SERVER}/update_team_details`, dataToSubmit)
    .then((res) => res.data);
  return {
    type: UPDATE_TEAM_DETAILS,
    payload: request,
  };
}

// 4 PUT / UDPATE_TEAM_PHOTO / updateTeamPhoto
// body: teamId, url, public_id
export function updateTeamPhoto(dataToSubmit) {
  const request = axios
    .put(`${ADMIN_SERVER}/update_team_photo`, dataToSubmit)
    .then((res) => res.data);
  return {
    type: UPDATE_TEAM_PHOTO,
    payload: request,
  };
}

// 5 POST   / ADD_HALL_OF_FAMER     / addHallOfFamer
// body: teamId, name, yearInducted, yearJoined, yearLeft, description
export function addHallOfFamer(dataToSubmit) {
  const request = axios
    .post(`${ADMIN_SERVER}/add_hall_of_famer`, dataToSubmit)
    .then((res) => res.data);
  return {
    type: ADD_HALL_OF_FAMER,
    payload: request,
  };
}

// 6 PUT / UPDATE_HALL_OF_FAMER / updateHallOfFamer
// params: id
// body: teamId, name, yearInducted, yearJoined, yearLeft, description
export function updateHallOfFamer(dataToSubmit, id) {
  const request = axios
    .put(`${ADMIN_SERVER}/update_hall_of_famer/${id}`, dataToSubmit)
    .then((res) => res.data);
  return {
    type: UDPATE_HALL_OF_FAMER,
    payload: request,
  };
}

// 7 DELETE / DElETE_HALL_OF_FAMER / deleteHallOfFamer
// params: team_id, id
export function deleteHallOfFamer(team_id, id) {
  const request = axios
    .delete(`${ADMIN_SERVER}/delete_hall_of_famer/${team_id}/${id}`)
    .then((res) => res.data);
  return {
    type: DELETE_HALL_OF_FAMER,
    payload: request,
  };
}

// 8 POST / ADD NEW TROPHY
// body: teamId, name, year, isWinner, isFinal, opponent

export function addNewTrophy(dataToSubmit) {
  const request = axios
    .post(`${ADMIN_SERVER}/add_new_trophy`, dataToSubmit)
    .then((res) => res.data);
  return {
    type: ADD_NEW_TROPHY,
    payload: request,
  };
}

// 9 DELETE / DELETE_TROPHY
// params: team_id, id,
export function deleteTrophy(team_id, id) {
  const request = axios
    .delete(`${ADMIN_SERVER}/delete_trophy/${team_id}/${id}`)
    .then((res) => res.data);
  return {
    type: DELETE_TROPHY,
    payload: request,
  };
}

// *******************************IMAGES*************************************

// 10 POST / UPLOAD_TEAM_PHOTO / uploadTeamPhoto
// files: file.path

export function uploadTeamPhoto(dataToSubmit) {
  const request = axios
    .post(`${ADMIN_SERVER}/upload_team_photo`, dataToSubmit)
    .then((res) => res.data);
  return {
    type: UPLOAD_TEAM_PHOTO,
    payload: request,
  };
}

// 11 DELETE / REMOVE_ADMIN_IMAGE / removeAdminImage
// query: public_id
export function removeAdminImage(public_id) {
  const request = axios
    .delete(`${ADMIN_SERVER}/remove_admin_image?public_id=${public_id}`)
    .then((res) => res.data);
  return {
    type: REMOVE_ADMIN_IMAGE,
    payload: request,
  };
}

// 1 / GET    / GET_PREVIOUS_SEASONS / getPreviousSeasons

export function getPreviousSeasons() {
  const request = axios
    .get(`${PUBLIC_SERVER}/get_previous_seasons`)
    .then((res) => res.data);
  return {
    type: GET_PREVIOUS_SEASONS,
    payload: request,
  };
}

// 2 / GET    / GET_PREVIOUS_SEASON_BY_ID / getPreviousSeasonById

export function getPreviousSeasonById(id) {
  const request = axios
    .get(`${PUBLIC_SERVER}/get_previous_season_by_id/${id}`)
    .then((res) => res.data);
  return {
    type: GET_PREVIOUS_SEASON_BY_ID,
    payload: request,
  };
}
// **********************************Admin**************************************
// 1 / POST   / ADD_PREVIOUS_SEASON / addPreviousSeason
export function addPreviousSeason(dataToSubmit) {
  const request = axios
    .post(`${ADMIN_SERVER}/add_previous_season`, dataToSubmit)
    .then((res) => res.data);
  return {
    type: ADD_PREVIOUS_SEASON,
    payload: request,
  };
}
// 2 / PUT    / UPDATE_PREVIOUS_SEASON / updatePreviousSeason
export function updatePreviousSeason(dataToSubmit, id) {
  const request = axios
    .put(`${ADMIN_SERVER}/update_previous_season/${id}`, dataToSubmit)
    .then((res) => res.data);
  return {
    type: UPDATE_PREVIOUS_SEASON,
    payload: request,
  };
}
// 3 / DELETE / DELETE_PREVIOUS_SEASON / deletePreviousSeason

export function deletePreviousSeason(id) {
  const request = axios
    .delete(`${ADMIN_SERVER}/delete_previous_season/${id}`)
    .then((res) => res.data);
  return {
    type: DELETE_PREVIOUS_SEASON,
    payload: request,
  };
}
// 4 / POST   / ADD_PREVIOUS_AWARD / addPreviousAward
// params: id (the id of the season)
export function addPreviousAward(dataToSubmit, id) {
  const request = axios
    .post(`${ADMIN_SERVER}/add_previous_award/${id}`, dataToSubmit)
    .then((res) => res.data);
  return {
    type: ADD_PREVIOUS_AWARD,
    payload: request,
  };
}
// 5 / DELETE / DELETE_PREVIOUS_AWARD / deletePreviousAward
// params: season_id, id
export function deletePreviousAward(season_id, id) {
  const request = axios
    .delete(`${ADMIN_SERVER}/delete_previous_award/${season_id}/${id}`)
    .then((res) => res.data);
  return {
    type: DELETE_PREVIOUS_AWARD,
    payload: request,
  };
}
