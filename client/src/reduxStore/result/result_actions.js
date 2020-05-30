// In this file:
// 1 GET / GET_ALL_RESULTS / getAllResults
// 2 GET / GET_RESULT_BY_ID / getResultById
// *********************************************************************************
// 1 / POST   / ADD_RESULT / addResult
// 2 / PUT    / UPDATE_RESULT / updateResult
// 3 / DELETE / DELETE_RESULT / deleteResult
// 4 / POST   / ADD_MATCH_PLAYER / addMatchPlayer
// 5 / DELETE / DELETE_MATCH_PLAYER / deleteMatchPlayer

import axios from 'axios';
import { ADMIN_SERVER, PUBLIC_SERVER } from '../types/routes';
import {
  // Admin
  ADD_RESULT,
  UPDATE_RESULT,
  DELETE_RESULT,
  ADD_MATCH_PLAYER,
  DELETE_MATCH_PLAYER,
  GET_ALL_RESULTS,
  GET_RESULT_BY_ID
} from '../types';

// 1 GET / GET_ALL_RESULTS / getAllResults / public
export function getAllResults() {
  const request = axios
    .get(`${PUBLIC_SERVER}/get_all_results`)
    .then(res => res.data);
  return {
    type: GET_ALL_RESULTS,
    payload: request
  };
}

// 2 GET / GET_RESULT_BY_ID / getResultById
export function getResultById(id) {
  const request = axios
    .get(`${PUBLIC_SERVER}/get_result_by_id/${id}`)
    .then(res => res.data);
  return {
    type: GET_RESULT_BY_ID,
    payload: request
  };
}

// 1 GET / GET_ALL_RESULTS / getAllResults / public
export function getResultsWithoutForfeits() {
  const request = axios
    .get(`${PUBLIC_SERVER}/get_results_without_forfeits`)
    .then(res => res.data);
  return {
    type: GET_ALL_RESULTS,
    payload: request
  };
}

// **********************************Admin**************************************

// 1 POST / ADD_RESULT / addResult
// body: date, type, isForfeit, isOwnForfeit, isHome, teamGoals, opponentGoals, opponentName, matchReport
export function addResult(dataToSubmit) {
  const request = axios
    .post(`${ADMIN_SERVER}/add_result`, dataToSubmit)
    .then(res => res.data);
  return {
    type: ADD_RESULT,
    payload: request
  };
}

// 2 PUT / UPDATE_RESULT / updateResult
// params: id
// body: date, type, isForfeit, isOwnForfeit, isHome, teamGoals, opponentGoals, opponentName, matchReport, points
export function updateResult(dataToSubmit, id) {
  const request = axios
    .put(`${ADMIN_SERVER}/update_result/${id}`, dataToSubmit)
    .then(res => res.data);
  return {
    type: UPDATE_RESULT,
    payload: request
  };
}

// 3 DELETE / DELETE_RESULT / deleteResult
// params: id

export function deleteResult(id) {
  const request = axios
    .delete(`${ADMIN_SERVER}/delete_result/${id}`)
    .then(res => res.data);
  return {
    type: DELETE_RESULT,
    payload: request
  };
}

// 4 POST / ADD_MATCH_PLAYER/ addMatchPlayer
// params: id
// body: player_id, goals, assists, mvp, conceded, pensScored, pensMissed, ownGoals, yellowCards, redCard
export function addMatchPlayer(dataToSubmit, id) {
  const request = axios
    .post(`${ADMIN_SERVER}/add_match_player/${id}`, dataToSubmit)
    .then(res => res.data);
  return {
    type: ADD_MATCH_PLAYER,
    payload: request
  };
}

// 5 DELETE / DELETE_MATCH_PLAYER
// params: result_id, id
export function deleteMatchPlayer(result_id, id) {
  const request = axios
    .delete(`${ADMIN_SERVER}/delete_match_player/${result_id}/${id}`)
    .then(res => res.data);
  return {
    type: DELETE_MATCH_PLAYER,
    payload: request
  };
}
