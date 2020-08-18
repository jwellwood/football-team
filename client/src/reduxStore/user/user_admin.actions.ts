import axios from 'axios';
import { actionIds } from '../../constants/actionIds';
import { userAPIRoutes as api } from 'constants/api';
import { IUserPermissionInput } from 'app/admin-user/shared/types';

// 1 / GET / GET_ALL_USERS  / getAllUsers
// 2 / GET / GET_USER_BY_ID / getUserByID
// 3 / PUT / SET_PERMISSIONS / setPermissions
// 4 / PUT / RESET_IMAGE / resetImage

export const getAllUsers = () => {
  const request = axios.get(api.GET_ALL_USERS_ROUTE).then((res) => res.data);
  return {
    type: actionIds.GET_ALL_USERS,
    payload: request,
  };
};

export const getUserById = (id: string) => {
  const request = axios
    .get(`${api.GET_USER_ROUTE}/${id}`)
    .then((res) => res.data);
  return {
    type: actionIds.GET_USER_BY_ID,
    payload: request,
  };
};

export const setPermissions = (
  dataToSubmit: IUserPermissionInput,
  id: string
) => {
  const request = axios
    .put(`${api.SET_PERMISSIONS_ROUTE}/${id}`, dataToSubmit)
    .then((res) => res.data);
  return {
    type: actionIds.SET_PERMISSIONS,
    payload: request,
  };
};

export const resetImage = (id: string) => {
  const request = axios
    .put(`${api.RESET_IMAGE_ROUTE}/${id}`)
    .then((res) => res.data);
  return {
    type: actionIds.RESET_IMAGE,
    payload: request,
  };
};
