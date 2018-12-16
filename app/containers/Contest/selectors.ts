import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

export const selectDomain = (state: ApplicationRootState) => {
  return state.contest ? state.contest : initialState;
};

export const selectTopBarTabsDomain = (state: ApplicationRootState) => {
  return state.topBarTabs;
};

export const selectId = () =>
  createSelector(selectTopBarTabsDomain, substate => {
    return substate.selectedId;
  });


export const selectContest = () =>
  createSelector(selectDomain, substate => {
    return substate.contest;
  });

export const selectTableResult = () =>
  createSelector(selectDomain, substate => {
    return substate.tableResult;
  });

export const selectIsTableItemsLoading = () =>
  createSelector(selectDomain, substate => {
    return substate.isTableItemsLoading;
  });

export const selectIsNextTableItemsLoading = () =>
  createSelector(selectDomain, substate => {
    return substate.isNextTableItemsLoading;
  });

