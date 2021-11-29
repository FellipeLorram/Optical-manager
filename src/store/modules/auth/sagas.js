import {
  call,
  put,
  all,
  takeLatest,
} from 'redux-saga/effects';
import { get } from 'lodash';

import axios from '../../../services/axios';
import history from '../../../services/history';
import * as types from '../types';
import * as actions from './actions';

function* loginRequest({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(axios.post, '/tokens', { email, password });
    yield put(actions.loginSucess({ ...response.data }));

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    history.push('/Level');
  } catch (error) {
    yield put(actions.loginFailure());
  }
}

function* adminRequest({ payload }) {
  try {
    const { adminPassword } = payload;

    const response = yield call(axios.post, '/level/admin-level', { adminPassword });
    yield put(actions.adminSucess({ ...response.data }));

    history.push('/');
  } catch (error) {
    history.push('/Level');
    yield put(actions.adminFailure());
  }
}

function* levelRequest({ payload }) {
  try {
    const { currentUserName, level } = payload;
    yield put(actions.levelSucess({ currentUserName, level }));

    if (level > 0) history.push('/');
    else history.push('/exams');
  } catch (error) {
    history.push('/Level');
    yield put(actions.adminFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest(types.LEVEL_REQUEST, levelRequest),
  takeLatest(types.ADMIN_REQUEST, adminRequest),
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
