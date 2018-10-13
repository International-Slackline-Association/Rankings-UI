import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

const selectDomain = (state: ApplicationRootState) => {
  return state.contest ? state.contest : initialState;
};

const selectTopBarTabsDomain = (state: ApplicationRootState) => {
  return state.topBarTabs;
};

const selectSelectedFilters = () =>
  createSelector(selectDomain, substate => {
    return substate.selectedFilters;
  });

const selectSelectedSearchInput = () =>
  createSelector(selectDomain, substate => {
    return substate.selectedSearchInput;
  });

const selectSuggestions = () =>
  createSelector(selectDomain, substate => {
    return substate.suggestions;
  });

const selectTableItems = () =>
  createSelector(selectDomain, substate => {
    return substate.tableItems;
  });

const selectIsTableItemsLoading = () =>
  createSelector(selectDomain, substate => {
    return substate.isTableItemsLoading;
  });
const selectDropdownFilters = () =>
  createSelector(selectDomain, substate => {
    return substate.dropdownFilters;
  });

const selectContest = () =>
  createSelector(selectDomain, substate => {
    return substate.contest;
  });

const selectId = () =>
  createSelector(selectTopBarTabsDomain, substate => {
    return substate.selectedId;
  });

export {
  selectDomain,
  selectSelectedFilters,
  selectSelectedSearchInput,
  selectSuggestions,
  selectTableItems,
  selectIsTableItemsLoading,
  selectDropdownFilters,
  selectContest,
  selectId,
};
