import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

const selectAdminResultsDomain = (state: ApplicationRootState) => {
  return state.adminResults ? state.adminResults : initialState;
};
export const selectContestFilter = () =>
  createSelector(selectAdminResultsDomain, substate => {
    return substate.contestFilter;
  });

export const selectAthleteFilters = () =>
  createSelector(selectAdminResultsDomain, substate => {
    return substate.athleteFilters;
  });

