import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the rankings state domain
 */

const selectRankingsDomain = state => state.get('rankings', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Rankings
 */

const makeSelectRankings = () =>
  createSelector(selectRankingsDomain, substate => substate.toJS());

export default makeSelectRankings;
export { selectRankingsDomain };
