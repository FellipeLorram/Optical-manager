import * as types from '../types';

export function loginRequest(payload) {
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
}

export function loginSucess(payload) {
  return {
    type: types.LOGIN_SUCESS,
    payload,
  };
}

export function loginFailure(payload) {
  return {
    type: types.LOGIN_FAILURE,
    payload,
  };
}

export function adminRequest(payload) {
  return {
    type: types.ADMIN_REQUEST,
    payload,
  };
}

export function adminSucess(payload) {
  return {
    type: types.ADMIN_SUCESS,
    payload,
  };
}

export function adminFailure(payload) {
  return {
    type: types.ADMIN_FAILURE,
    payload,
  };
}

export function levelRequest(payload) {
  return {
    type: types.LEVEL_REQUEST,
    payload,
  };
}

export function levelSucess(payload) {
  return {
    type: types.LEVEL_SUCESS,
    payload,
  };
}
