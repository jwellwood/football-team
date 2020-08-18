import axios from 'axios';
import { actionIds } from '../../constants/actionIds';
import { userAPIRoutes as api } from 'constants/api';

// 1 / PUT      / UPDATE_PLAYER_DETAILS  / updatePlayerDetails
// 2 / PUT      / UPDATE_PLAYER_TARGETS  / updatePlayerTargets
// 3 / PUT      / UPDATE_USER_IMAGE      / updateUserImage
// 4 / POST     / UPLOAD_USER_IMAGE / uploadUserImage
// 5 / DELETE   / REMOVE_USER_IMAGE / removeUserImage

export const updatePlayerDetails = (dataToSubmit: {
  name: string;
  squadNumber: number;
  position: string;
}) => {
  const request = axios
    .put(api.UPDATE_PLAYER_DETAILS_ROUTE, dataToSubmit)
    .then((res) => res.data);
  return {
    type: actionIds.UPDATE_PLAYER_DETAILS,
    payload: request,
  };
};

export const updatePlayerTargets = (dataToSubmit: {
  appsTarget: number;
  goalsTarget: number;
  assistsTarget: number;
}) => {
  const request = axios
    .put(api.UPDATE_PLAYER_TARGETS_ROUTE, dataToSubmit)
    .then((res) => res.data);
  return {
    type: actionIds.UPDATE_PLAYER_TARGETS,
    payload: request,
  };
};

export const updateUserImage = (dataToSubmit: {
  url: string;
  public_id: number;
}) => {
  const request = axios
    .put(api.UPDATE_USER_IMAGE_ROUTE, dataToSubmit)
    .then((res) => res.data);
  return {
    type: actionIds.UPDATE_USER_IMAGE,
    payload: request,
  };
};

export const uploadUserImage = (dataToSubmit: FormData) => {
  const request = axios
    .post(api.UPLOAD_USER_IMAGE_ROUTE, dataToSubmit)
    .then((res) => res.data);
  return {
    type: actionIds.UPLOAD_USER_IMAGE,
    payload: request,
  };
};

export const removeUserImage = (public_id: number) => {
  const request = axios
    .delete(`${api.REMOVE_USER_IMAGE_ROUTE}${public_id}`)
    .then((res) => res.data);
  return {
    type: actionIds.REMOVE_USER_IMAGE,
    payload: request,
  };
};
