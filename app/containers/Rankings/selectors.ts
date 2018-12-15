import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

const selectDomain = (state: ApplicationRootState) => {
  return state.rankings ? state.rankings : initialState;
};

export const selectCategories = () =>
  createSelector(selectDomain, substate => {
    return substate.categories;
  });

export const selectAthleteFilter = () =>
  createSelector(selectDomain, substate => {
    return substate.athleteFilter;
  });
export const selectCountryFilter = () =>
  createSelector(selectDomain, substate => {
    return substate.countryFilter;
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
