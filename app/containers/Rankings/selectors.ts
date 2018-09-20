import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';


/**
 * Direct selector to the rankings state domain
 */

const selectRankingsDomain = (state: ApplicationRootState) => {
  return state ? state : initialState;
};

/**
 * Other specific selectors
 */

/**
 * Default selector used by Rankings
 */

const selectRankings = () =>
  createSelector(selectRankingsDomain, substate => {
    return substate;
  });

export default selectRankings;
export { selectRankingsDomain };
