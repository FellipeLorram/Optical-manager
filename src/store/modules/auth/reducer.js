import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
  level: 0,
  currentUserName: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    case types.LOGIN_SUCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      newState.isLoading = false;
      return newState;
    }

    case types.LOGIN_FAILURE: {
      return { ...initialState };
    }

    case types.ADMIN_SUCESS: {
      const newState = { ...state };
      newState.level = action.payload.level;
      newState.isLoading = false;
      newState.currentUserName = action.payload.currentUserName;
      return newState;
    }

    case types.ADMIN_FAILURE: {
      const newState = { ...state };
      return newState;
    }

    case types.LEVEL_SUCESS: {
      const newState = { ...state };
      newState.level = action.payload.level;
      newState.isLoading = false;
      newState.currentUserName = action.payload.currentUserName;
      return newState;
    }

    default: return state;
  }
}
