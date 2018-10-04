import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the rankings state domain
 */

const selectRankingsDomain = (state: ApplicationRootState) => {
  return state.rankings ? state.rankings : initialState;
};

/**
 * Other specific selectors
 */

const selectSelectedFilters = () =>
  createSelector(selectRankingsDomain, substate => {
    return substate.selectedFilters;
  });

/**
 * Default selector used by Rankings
 */

const selectRankings = () =>
  createSelector(selectRankingsDomain, substate => {
    return substate;
  });

export default selectRankings;
export { selectRankingsDomain, selectSelectedFilters };
