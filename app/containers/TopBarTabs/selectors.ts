import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

const selectTopBarDomain = (state: ApplicationRootState) => {
  return state.topBarTabs ? state.topBarTabs : initialState;
};

export const selectRouterDomain = (state: ApplicationRootState) => {
  return state.router;
};

export const selectTabItems = () =>
  createSelector(selectTopBarDomain, state => {
    return state.items;
  });

export const selectSelectedId = () =>
  createSelector(selectTopBarDomain, state => {
    return state.selectedId;
  });

export const selectLocationPath = () =>
  createSelector(selectRouterDomain, state => {
    return state.location ? state.location.pathname : '';
  });

