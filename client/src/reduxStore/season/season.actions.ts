import axios from 'axios';
import { actionIds } from '../../constants/actionIds';
import { seasonAPIRoutes as api } from 'constants/routes';
import { IPreviousSeason, IAward } from 'shared/types';
// 1 / GET    / GET_PREVIOUS_SEASONS / getPreviousSeasons
// 2 / GET    / GET_PREVIOUS_SEASON_BY_ID / getPreviousSeasonById
// 3 / POST   / ADD_PREVIOUS_SEASON / addPreviousSeason
// 4 / PUT    / UPDATE_PREVIOUS_SEASON / updatePreviousSeason
// 5 / DELETE / DELETE_PREVIOUS_SEASON / deletePreviousSeason
// 6 / POST   / ADD_PREVIOUS_AWARD / addPreviousAward
// 7 / DELETE / DELETE_PREVIOUS_AWARD / deletePreviousAward

export const getPreviousSeasons = () => {
  const request = axios
    .get(api.GET_PREVIOUS_SEASONS_ROUTE)
    .then((res) => res.data);
  return {
    type: actionIds.GET_PREVIOUS_SEASONS,
    payload: request,
  };
};

export const getPreviousSeasonById = (id: string) => {
  const request = axios
    .get(`${api.GET_SEASON_ROUTE}/${id}`)
    .then((res) => res.data);
  return {
    type: actionIds.GET_PREVIOUS_SEASON_BY_ID,
    payload: request,
  };
};
export const addPreviousSeason = (dataToSubmit: IPreviousSeason) => {
  const request = axios
    .post(api.ADD_PREVIOUS_SEASON_ROUTE, dataToSubmit)
    .then((res) => res.data);
  return {
    type: actionIds.ADD_PREVIOUS_SEASON,
    payload: request,
  };
};
export const updatePreviousSeason = (
  dataToSubmit: IPreviousSeason,
  id: string
) => {
  const request = axios
    .put(`${api.UPDATE_PREVIOUS_SEASON_ROUTE}/${id}`, dataToSubmit)
    .then((res) => res.data);
  return {
    type: actionIds.UPDATE_PREVIOUS_SEASON,
    payload: request,
  };
};

export const deletePreviousSeason = (id: string) => {
  const request = axios
    .delete(`${api.DELETE_PREVIOUS_SEASON_ROUTE}/${id}`)
    .then((res) => res.data);
  return {
    type: actionIds.DELETE_PREVIOUS_SEASON,
    payload: request,
  };
};

export const addPreviousAward = (dataToSubmit: IAward, id: string) => {
  const request = axios
    .post(`${api.ADD_PREVIOUS_SEASON_AWARD_ROUTE}/${id}`, dataToSubmit)
    .then((res) => res.data);
  return {
    type: actionIds.ADD_PREVIOUS_AWARD,
    payload: request,
  };
};

export const deletePreviousAward = (season_id: string, id: string) => {
  const request = axios
    .delete(`${api.DELETE_PREVIOUS_SEASON_AWARD_ROUTE}/${season_id}/${id}`)
    .then((res) => res.data);
  return {
    type: actionIds.DELETE_PREVIOUS_AWARD,
    payload: request,
  };
};
