import axios from 'axios';
import { actionIds } from '../../constants/actionIds';
import { teamAPIRoutes as api } from 'constants/api';
import { ITrophy, IHallOfFame, ITeam } from 'shared/types';

// 1  GET    / GET_TEAM              / getTeam
// 2  POST   / ADD_TEAM              / addTeam
// 3  PUT    / UPDATE_TEAM_DETAILS   / updateTeamDetails
// 4  PUT    / UPDATE_TEAM_PHOTO     / updateTeamPhoto
// 5  POST   / ADD_HALL_OF_FAMER     / addHallOfFamer
// 6  PUT    / UPDATE_HALL_OF_FAMER  / updateHallOfFamer
// 7  DELETE / DELETE_HALL_OF_FAMER  / deleteHallOfFamer
// 8  POST   / ADD_NEW_TROPHY        / addNewTrophy
// 9  DELETE / DELETE_TROPHY         / deleteTrophy
// 10 POST   / UPLOAD_TEAM_PHOTO     / uploadTeamPhoto
// 11 DELETE / REMOVE_ADMIN_IMAGE     / removeAdminImage

export const getTeam = () => {
  const request = axios.get(api.GET_TEAM_ROUTE).then((res) => res.data);
  return {
    type: actionIds.GET_TEAM,
    payload: request,
  };
};
export const addTeam = (dataToSubmit: ITeam) => {
  const request = axios
    .post(api.ADD_TEAM_ROUTE, dataToSubmit)
    .then((res) => res.data);
  return {
    type: actionIds.ADD_TEAM,
    payload: request,
  };
};

export const updateTeamDetails = (dataToSubmit: ITeam) => {
  const request = axios
    .put(api.UPDATE_TEAM_DETAILS_ROUTE, dataToSubmit)
    .then((res) => res.data);
  return {
    type: actionIds.UPDATE_TEAM_DETAILS,
    payload: request,
  };
};

export const updateTeamPhoto = (dataToSubmit: {
  url: string;
  public_id: number;
  id: string;
}) => {
  const request = axios
    .put(api.UPDATE_TEAM_PHOTO_ROUTE, dataToSubmit)
    .then((res) => res.data);
  return {
    type: actionIds.UPDATE_TEAM_PHOTO,
    payload: request,
  };
};

export const addHallOfFamer = (dataToSubmit: IHallOfFame) => {
  const request = axios
    .post(api.ADD_HOF_ROUTE, dataToSubmit)
    .then((res) => res.data);
  return {
    type: actionIds.ADD_HALL_OF_FAMER,
    payload: request,
  };
};

export const updateHallOfFamer = (dataToSubmit: IHallOfFame, id: string) => {
  const request = axios
    .put(`${api.UPDATE_HOF_ROUTE}/${id}`, dataToSubmit)
    .then((res) => res.data);
  return {
    type: actionIds.UPDATE_HALL_OF_FAMER,
    payload: request,
  };
};

export const deleteHallOfFamer = (team_id: string, id: string) => {
  const request = axios
    .delete(`${api.DELETE_HOF_ROUTE}/${team_id}/${id}`)
    .then((res) => res.data);
  return {
    type: actionIds.DELETE_HALL_OF_FAMER,
    payload: request,
  };
};

export const addNewTrophy = (dataToSubmit: ITrophy) => {
  const request = axios
    .post(api.ADD_TROPHY_ROUTE, dataToSubmit)
    .then((res) => res.data);
  return {
    type: actionIds.ADD_NEW_TROPHY,
    payload: request,
  };
};

export const deleteTrophy = (team_id: string, id: string) => {
  const request = axios
    .delete(`${api.DELETE_TROPHY_ROUTE}/${team_id}/${id}`)
    .then((res) => res.data);
  return {
    type: actionIds.DELETE_TROPHY,
    payload: request,
  };
};

export const uploadTeamPhoto = (dataToSubmit: FormData) => {
  const request = axios
    .post(api.UPLOAD_TEM_PHOTO_ROUTE, dataToSubmit)
    .then((res) => res.data);
  return {
    type: actionIds.UPLOAD_TEAM_PHOTO,
    payload: request,
  };
};

export const removeAdminImage = (public_id: number) => {
  const request = axios
    .delete(`${api.REMOVE_ADMIN_IMAGE_ROUTE}${public_id}`)
    .then((res) => res.data);
  return {
    type: actionIds.REMOVE_ADMIN_IMAGE,
    payload: request,
  };
};
