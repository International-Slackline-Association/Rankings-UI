import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

const selectDomain = (state: ApplicationRootState) => {
  return state.rankings ? state.rankings : initialState;
};

const selectCategories = () =>
  createSelector(selectDomain, substate => {
    return substate.categories;
  });

const selectFilters = () =>
  createSelector(selectDomain, substate => {
    return substate.filters;
  });
const selectTableItems = () =>
  createSelector(selectDomain, substate => {
    return substate.tableItems;
  });

const selectIsTableItemsLoading = () =>
  createSelector(selectDomain, substate => {
    return substate.isTableItemsLoading;
  });

export {
  selectDomain,
  selectCategories,
  selectFilters,
  selectTableItems,
  selectIsTableItemsLoading,
};
