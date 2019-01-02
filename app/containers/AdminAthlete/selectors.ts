import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

const selectAdminAthleteDomain = (state: ApplicationRootState) => {
  return state.adminAthlete ? state.adminAthlete : initialState;
};

export const selectAthleteFilter = () =>
  createSelector(selectAdminAthleteDomain, substate => {
    return substate.athleteFilter;
  });

export const selectAthlete = () =>
  createSelector(selectAdminAthleteDomain, substate => {
    return substate.athlete;
  });

export const selectCountryFilter = () =>
  createSelector(selectAdminAthleteDomain, substate => {
    return substate.countryFilter;
  });
