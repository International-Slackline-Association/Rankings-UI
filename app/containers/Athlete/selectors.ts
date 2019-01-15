import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

export const selectDomain = (state: ApplicationRootState) => {
  return state.athlete ? state.athlete : initialState;
};

export const selectTopbarDomain = (state: ApplicationRootState) => {
  return state.topBarTabs;
};

export const selectId = () =>
  createSelector(selectTopbarDomain, substate => {
    return substate.selectedId;
  });

export const selectAthlete = () =>
  createSelector(selectDomain, substate => {
    return substate.athlete;
  });

export const isAthleteLoading = () =>
  createSelector(selectDomain, substate => {
    return substate.isAthleteLoading;
  });

export const selectCategories = () =>
  createSelector(selectDomain, substate => {
    return substate.categories;
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
