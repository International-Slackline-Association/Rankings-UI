import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the rankings state domain
 */

const selectRankingsDomain = (state: ApplicationRootState) => {
  return state.contests ? state.contests : initialState;
};

/**
 * Other specific selectors
 */

const selectSelectedFilters = () =>
  createSelector(selectRankingsDomain, substate => {
    return substate.selectedFilters;
  });

const selectSelectedSearchInput = () =>
  createSelector(selectRankingsDomain, substate => {
    return substate.selectedSearchInput;
  });

const selectSuggestions = () =>
  createSelector(selectRankingsDomain, substate => {
    return substate.suggestions;
  });

const selectTableItems = () =>
  createSelector(selectRankingsDomain, substate => {
    return substate.tableItems;
  });

const selectIsTableItemsLoading = () =>
  createSelector(selectRankingsDomain, substate => {
    return substate.isTableItemsLoading;
  });
const selectDropdownFilters = () =>
  createSelector(selectRankingsDomain, substate => {
    return substate.dropdownFilters;
  });

/**
 * Default selector used by Rankings
 */

const selectRankings = () =>
  createSelector(selectRankingsDomain, substate => {
    return substate;
  });

export default selectRankings;
export {
  selectRankingsDomain,
  selectSelectedFilters,
  selectSelectedSearchInput,
  selectSuggestions,
  selectTableItems,
  selectIsTableItemsLoading,
  selectDropdownFilters,
};
