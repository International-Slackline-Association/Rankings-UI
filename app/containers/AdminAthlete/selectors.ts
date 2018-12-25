import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the adminAthlete state domain
 */

const selectAdminAthleteDomain = (state: ApplicationRootState) => {
  return state.adminAthlete ? state.adminAthlete : initialState;
};

/**
 * Other specific selectors
 */

/**
 * Default selector used by AdminAthlete
 */

const selectAdminAthlete = () =>
  createSelector(selectAdminAthleteDomain, substate => {
    return substate;
  });

export default selectAdminAthlete;
export { selectAdminAthleteDomain };
