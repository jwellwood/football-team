import axios from 'axios';
import { actionIds } from 'constants/actionIds';
import { authAPIRoutes as api } from 'constants/routes';
import { IUserData } from 'shared/types';
// 1 / GET    / GET_AUTH                / getAuth
// 2 / POST   / SIGN_UP                 / signUp
// 3 / POST   / SIGN_IN                 / signIn
// 4 / GET    / SIGN_OUT                / signOut
// 5 / POST   / CHECK_CURRENT_PASSWORD  / checkCurrentPassword
// 6 / PUT    / UPDATE_PASSWORD         / updatePassword
// 7 / PUT    / UPDATE_USER_ACCOUNT     / updateUserAccount
// 8 / DELETE / DELETE USER             / deleteUser

export const getAuth = () => {
  const request = axios.get(api.GET_AUTH_ROUTE).then((res) => res.data);
  return {
    type: actionIds.GET_AUTH,
    payload: request,
  };
};

export const signUp = (dataToSubmit: {
  name: string;
  email: string;
  password: string;
}) => {
  const request = axios
    .post(api.SIGN_UP_ROUTE, dataToSubmit)
    .then((res) => res.data);
  return {
    type: actionIds.SIGN_UP,
    payload: request,
  };
};

export const signIn = (dataToSubmit: { email: string; password: string }) => {
  const request = axios
    .post(api.SIGN_IN_ROUTE, dataToSubmit)
    .then((res) => res.data);
  return {
    type: actionIds.SIGN_IN,
    payload: request,
  };
};

export const signOut = () => {
  const request = axios.get(api.SIGN_OUT_ROUTE).then((res) => res.data);
  return {
    type: actionIds.SIGN_OUT,
    payload: request,
  };
};

export const checkCurrentPassword = (dataToSubmit: {
  currentPassword: string;
}) => {
  const request = axios
    .post(api.CHECK_CURRENT_PASSWORD_ROUTE, dataToSubmit)
    .then((response) => response.data);
  return {
    type: actionIds.CHECK_CURRENT_PASSWORD,
    payload: request,
  };
};

export const updatePassword = (dataToSubmit: {
  currentPassword: string;
  newPassword: string;
  user: IUserData;
}) => {
  const request = axios
    .put(api.UPDATE_PASSWORD_ROUTE, dataToSubmit)
    .then((response) => response.data);
  return {
    type: actionIds.UPDATE_PASSWORD,
    payload: request,
  };
};

export const updateUserAccount = (dataToSubmit: { email: string }) => {
  const request = axios
    .put(api.UPDATE_USER_ACCOUNT_ROUTE, dataToSubmit)
    .then((res) => res.data);
  return {
    type: actionIds.UPDATE_USER_ACCOUNT,
    payload: request,
  };
};

export const deleteUser = (data) => {
  // TODO
  const request = axios
    .delete(api.DELETE_USER_ROUTE, data)
    .then((res) => res.data);
  return {
    type: actionIds.DELETE_USER,
    payload: request,
  };
};

export const forgotPassword = (dataToSubmit: { email: string }) => {
  const request = axios
    .post(api.FORGOT_PASSWORD_ROUTE, dataToSubmit)
    .then((res) => res.data);
  return {
    type: actionIds.FORGOT_PASSWORD,
    payload: request,
  };
};

export const resetPassword = (dataToSubmit: {
  password: string;
  token: string;
}) => {
  const request = axios
    .post(api.RESET_PASSWORD_ROUTE, dataToSubmit)
    .then((res) => res.data);
  return {
    type: actionIds.RESET_PASSWORD,
    payload: request,
  };
};

export const verifyEmail = (token: string) => {
  const request = axios
    .post(api.VERIFY_EMAIL_ROUTE, token)
    .then((res) => res.data);
  return {
    type: actionIds.VERIFY_EMAIL,
    payload: request,
  };
};
