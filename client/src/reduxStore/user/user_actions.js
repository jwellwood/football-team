// In this file:
// 1 / PUT      / UPDATE_PLAYER_DETAILS  / updatePlayerDetails
// 2 / PUT      / UPDATE_PLAYER_TARGETS  / updatePlayerTargets
// 3 / PUT      / UPDATE_USER_IMAGE      / updateUserImage
// IMAGES
// 1 / POST     / UPLOAD_USER_IMAGE / uploadUserImage
// 2 / DELETE   / REMOVE_USER_IMAGE / removeUserImage

import axios from 'axios';
import { USER_SERVER } from '../types/routes';
import {
  UPDATE_PLAYER_TARGETS,
  UPDATE_PLAYER_DETAILS,
  UPDATE_USER_IMAGE,
  // IMAGES
  UPLOAD_USER_IMAGE,
  REMOVE_USER_IMAGE
} from '../types';

// 1 PUT / UPDATE_PLAYER_DETAILS / updatePlayerDetails
// body: name, squadNumber, position

export function updatePlayerDetails(dataToSubmit) {
  const request = axios
    .put(`${USER_SERVER}/update_player_details`, dataToSubmit)
    .then(res => res.data);
  return {
    type: UPDATE_PLAYER_DETAILS,
    payload: request
  };
}

// 2 PUT / UPDATE_PLAYER_TARGETS / updatePlayerTargets
// body: appsTarget, goalsTarget, assistsTarget

export function updatePlayerTargets(dataToSubmit) {
  const request = axios
    .put(`${USER_SERVER}/update_player_targets`, dataToSubmit)
    .then(res => res.data);
  return {
    type: UPDATE_PLAYER_TARGETS,
    payload: request
  };
}

// 3 PUT / UPDATE_USER_IMAGE / updateUserImage
// body: url, public_id

export function updateUserImage(dataToSubmit) {
  const request = axios
    .put(`${USER_SERVER}/update_user_image`, dataToSubmit)
    .then(res => res.data);
  return {
    type: UPDATE_USER_IMAGE,
    payload: request
  };
}

// *******************************IMAGES*************************************

// 1 POST / UPLOAD_USER_IMAGE / uploadUserImage
export function uploadUserImage(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/upload_user_image`, dataToSubmit)
    .then(res => res.data);
  return {
    type: UPLOAD_USER_IMAGE,
    payload: request
  };
}

// 2 DELETE / REMOVE_USER_IMAGE / removeUserImage
// query: public_id
export function removeUserImage(public_id) {
  const request = axios
    .delete(`${USER_SERVER}/remove_user_image?public_id=${public_id}`)
    .then(res => res.data);
  return {
    type: REMOVE_USER_IMAGE,
    payload: request
  };
}
