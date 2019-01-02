import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the adminLogin state domain
 */

const selectAdminLoginDomain = (state: ApplicationRootState) => {
  return state.adminLogin ? state.adminLogin : initialState;
};

export const selectAdminLogin = () =>
  createSelector(selectAdminLoginDomain, substate => {
    return substate;
  });
