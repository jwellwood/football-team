// 1 / GET / GET_ALL_USERS  / getAllUsers
// 2 / GET / GET_USER_BY_ID / getUserByID
// 3 / PUT / SET_PERMISSIONS / setPermissions

import axios from 'axios';
import { ADMIN_SERVER } from 'constants/server.routes';
import {
  GET_ALL_USERS,
  GET_USER_BY_ID,
  SET_PERMISSIONS,
  RESET_IMAGE,
} from '../types';

export function getAllUsers() {
  const request = axios
    .get(`${ADMIN_SERVER}/get_all_users`)
    .then((res) => res.data);
  return {
    type: GET_ALL_USERS,
    payload: request,
  };
}

export function getUserById(id) {
  const request = axios
    .get(`${ADMIN_SERVER}/get_user_by_id/${id}`)
    .then((res) => res.data);
  return {
    type: GET_USER_BY_ID,
    payload: request,
  };
}

export function setPermissions(dataToSubmit, id) {
  const request = axios
    .put(`${ADMIN_SERVER}/set_permissions/${id}`, dataToSubmit)
    .then((res) => res.data);
  return {
    type: SET_PERMISSIONS,
    payload: request,
  };
}

export function resetImage(id) {
  const request = axios
    .put(`${ADMIN_SERVER}/reset_image/${id}`)
    .then((res) => res.data);
  return {
    type: RESET_IMAGE,
    payload: request,
  };
}
