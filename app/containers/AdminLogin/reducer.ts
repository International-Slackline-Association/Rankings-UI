/*
 *
 * AdminLogin reducer
 *
 */

import { combineReducers } from 'redux';

import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  isAuthenticated: false,
  loginError: null,
  isLoginLoading: false,
};

export default combineReducers<ContainerState, ContainerActions>({
  isAuthenticated: (state = initialState.isAuthenticated, action) => {
    switch (action.type) {
      case ActionTypes.LOGIN_SUCCESS:
        return true;
      case ActionTypes.LOGIN_ERROR:
        return false;
    }
    return state;
  },
  loginError: (state = initialState.loginError, action) => {
    switch (action.type) {
      case ActionTypes.LOGIN_ERROR:
        return action.payload;
      case ActionTypes.CLEAR_LOGIN_ERROR:
        return initialState.loginError;
    }
    return state;
  },
  isLoginLoading: (state = initialState.isLoginLoading, action) => {
    switch (action.type) {
      case ActionTypes.LOGIN:
        return true;
      case ActionTypes.LOGIN_ERROR:
      case ActionTypes.LOGIN_SUCCESS:
        return false;
    }
    return state;
  },
});
