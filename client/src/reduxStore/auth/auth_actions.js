// In this file: Actions related to authentication status and changing account details
// 1 / GET    / GET_AUTH                / getAuth
// 2 / POST   / SIGN_UP                 / signUp
// 3 / POST   / SIGN_IN                 / signIn
// 4 / GET    / SIGN_OUT                / signOut
// 5 / POST   / CHECK_CURRENT_PASSWORD  / checkCurrentPassword
// 6 / PUT    / UPDATE_PASSWORD         / updatePassword
// 7 / PUT    / UDPATE_USER_ACCOUNT     / updateUserAccount
// 8 / DELETE / DELETE USER             / deleteUser

import axios from 'axios';
import { USER_SERVER, PUBLIC_SERVER } from '../types/routes';
import {
  // Auth
  GET_AUTH,
  // User
  SIGN_UP,
  SIGN_IN,
  SIGN_OUT,
  CHECK_CURRENT_PASSWORD,
  UPDATE_PASSWORD,
  UPDATE_USER_ACCOUNT,
  DELETE_USER,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  VERIFY_EMAIL,
} from '../types';

// 1 / GET_AUTH / getAuth / get_auth
// GET
export function getAuth() {
  const request = axios.get(`${USER_SERVER}/get_auth`).then((res) => res.data);
  return {
    type: GET_AUTH,
    payload: request,
  };
}

// 2 / SIGN_UP / signUp
// POST
// body: name, email, password
export function signUp(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/sign_up`, dataToSubmit)
    .then((res) => res.data);
  return {
    type: SIGN_UP,
    payload: request,
  };
}

// 3 / SIGN_IN / signIn
// POST
// body: email, password
export function signIn(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/sign_in`, dataToSubmit)
    .then((res) => res.data);
  return {
    type: SIGN_IN,
    payload: request,
  };
}

// 4 / SIGN_OUT / signOut
// GET
export function signOut() {
  const request = axios.get(`${USER_SERVER}/sign_out`).then((res) => res.data);
  return {
    type: SIGN_OUT,
    payload: request,
  };
}

// 5 / CHECK_CURRENT_PASSWORD / checkCurrentPassword
// POST
// body: currentPassword
export function checkCurrentPassword(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/check_current_password`, dataToSubmit)
    .then((response) => response.data);
  return {
    type: CHECK_CURRENT_PASSWORD,
    payload: request,
  };
}

// 6 / UPDATE_PASSWORD / updatePassword
// PUT
// body: newPassword
export function updatePassword(dataToSubmit) {
  const request = axios
    .put(`${USER_SERVER}/update_password`, dataToSubmit)
    .then((response) => response.data);
  return {
    type: UPDATE_PASSWORD,
    payload: request,
  };
}

// 7 / UDPATE_USER_ACCOUNT
// PUT
// body: email

export function updateUserAccount(dataToSubmit) {
  const request = axios
    .put(`${USER_SERVER}/update_user_account`, dataToSubmit)
    .then((res) => res.data);
  return {
    type: UPDATE_USER_ACCOUNT,
    payload: request,
  };
}

// 8 / DELETE USER
// DELETE

export function deleteUser(dataToSubmit) {
  const request = axios
    .delete(`${USER_SERVER}/delete_user`, dataToSubmit)
    .then((res) => res.data);
  return {
    type: DELETE_USER,
    payload: request,
  };
}

// 9 / FORGOT_PASSWORD
// POST

export function forgotPassword(dataToSubmit) {
  const request = axios
    .post(`${PUBLIC_SERVER}/forgot_password`, dataToSubmit)
    .then((res) => res.data);
  return {
    type: FORGOT_PASSWORD,
    payload: request,
  };
}

// 10 / RESET_PASSWORD
// POST
export function resetPassword(dataToSubmit) {
  const request = axios
    .post(`${PUBLIC_SERVER}/reset_password`, dataToSubmit)
    .then((res) => res.data);
  return {
    type: RESET_PASSWORD,
    payload: request,
  };
}

// 10 / RESET_PASSWORD
// GET
export function verifyEmail(dataToSubmit) {
  const request = axios
    .post(`${PUBLIC_SERVER}/verify_email`, dataToSubmit)
    .then((res) => res.data);
  return {
    type: VERIFY_EMAIL,
    payload: request,
  };
}
