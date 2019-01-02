import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

const selectAdminContestDomain = (state: ApplicationRootState) => {
  return state.adminContest ? state.adminContest : initialState;
};

export const selectContestFilter = () =>
  createSelector(selectAdminContestDomain, substate => {
    return substate.contestFilter;
  });

export const selectContest = () =>
  createSelector(selectAdminContestDomain, substate => {
    return substate.contest;
  });

export const selectCountryFilter = () =>
  createSelector(selectAdminContestDomain, substate => {
    return substate.countryFilter;
  });

export const selectDisciplines = () =>
  createSelector(selectAdminContestDomain, substate => {
    return substate.disciplines;
  });

export const selectContestCategories = () =>
  createSelector(selectAdminContestDomain, substate => {
    return substate.contestCategories;
  });
