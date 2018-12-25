import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

const selectTopBarDomain = (state: ApplicationRootState) => {
  return state.adminTopBarTabs ? state.adminTopBarTabs : initialState;
};

const selectRouterDomain = (state: ApplicationRootState) => {
  return state.router;
};
export const selectSelectedId = () =>
  createSelector(selectTopBarDomain, state => {
    return state.selectedId;
  });

export const selectLocationPath = () =>
  createSelector(selectRouterDomain, state => {
    return state.location ? state.location.pathname : '';
  });

