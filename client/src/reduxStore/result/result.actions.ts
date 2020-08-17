import axios from 'axios';
import { actionIds } from 'constants/actionIds';
import { resultAPIRoutes as api } from 'constants/routes';
import { IResultInput } from 'app/admin-result/shared/types';
import { IResultPlayerStats } from 'shared/types';

// 1 GET    / GET_ALL_RESULTS / getAllResults
// 2 GET    / GET_RESULT_BY_ID / getResultById
// 3 POST   / ADD_RESULT / addResult
// 4 PUT    / UPDATE_RESULT / updateResult
// 5 DELETE / DELETE_RESULT / deleteResult
// 6 POST   / ADD_MATCH_PLAYER / addMatchPlayer
// 7 DELETE / DELETE_MATCH_PLAYER / deleteMatchPlayer

export const getAllResults = () => {
  const request = axios.get(api.GET_ALL_RESULTS_ROUTE).then((res) => res.data);
  return {
    type: actionIds.GET_ALL_RESULTS,
    payload: request,
  };
};

export const getResultById = (id: string) => {
  const request = axios
    .get(`${api.GET_RESULT_ROUTE}/${id}`)
    .then((res) => res.data);
  return {
    type: actionIds.GET_RESULT_BY_ID,
    payload: request,
  };
};

export const addResult = (dataToSubmit: IResultInput) => {
  const request = axios
    .post(api.ADD_RESULT_ROUTE, dataToSubmit)
    .then((res) => res.data);
  return {
    type: actionIds.ADD_RESULT,
    payload: request,
  };
};

export const updateResult = (dataToSubmit: IResultInput, id: string) => {
  const request = axios
    .put(`${api.UPDATE_RESULT_ROUTE}/${id}`, dataToSubmit)
    .then((res) => res.data);
  return {
    type: actionIds.UPDATE_RESULT,
    payload: request,
  };
};

export const deleteResult = (id: string) => {
  const request = axios
    .delete(`${api.DELETE_RESULT_ROUTE}/${id}`)
    .then((res) => res.data);
  return {
    type: actionIds.DELETE_RESULT,
    payload: request,
  };
};

export const addMatchPlayer = (
  dataToSubmit: IResultPlayerStats,
  id: string
) => {
  const request = axios
    .post(`${api.ADD_MATCH_PLAYER_ROUTE}/${id}`, dataToSubmit)
    .then((res) => res.data);
  return {
    type: actionIds.ADD_MATCH_PLAYER,
    payload: request,
  };
};

export const deleteMatchPlayer = (result_id: string, id: string) => {
  const request = axios
    .delete(`${api.DELETE_MATCH_PLAYER_ROUTE}/${result_id}/${id}`)
    .then((res) => res.data);
  return {
    type: actionIds.DELETE_MATCH_PLAYER,
    payload: request,
  };
};
