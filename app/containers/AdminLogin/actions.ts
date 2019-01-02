/*
 *
 * AdminLogin actions
 *
 */

import { action } from 'typesafe-actions';
import {} from './types';

import ActionTypes from './constants';
import { CustomError } from 'utils/error';

export const login = (email: string, password: string) =>
  action(ActionTypes.LOGIN, { email: email, password: password });

export const loginSuccess = () => action(ActionTypes.LOGIN_SUCCESS);

export const checkUser = () => action(ActionTypes.CHECK_USER);

export const loginError = (error: CustomError) =>
  action(ActionTypes.LOGIN_ERROR, error);

export const clearLoginError = () => action(ActionTypes.CLEAR_LOGIN_ERROR);
