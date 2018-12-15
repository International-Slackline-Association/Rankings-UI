import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

const selectDomain = (state: ApplicationRootState) => {
  return state.contests ? state.contests : initialState;
};

export const selectCategories = () =>
  createSelector(selectDomain, substate => {
    return substate.categories;
  });

export const selectContestFilter = () =>
  createSelector(selectDomain, substate => {
    return substate.contestFilter;
  });

export const selectTableResult = () =>
  createSelector(selectDomain, substate => {
    return substate.tableResult;
  });

export const selectIsTableItemsLoading = () =>
  createSelector(selectDomain, substate => {
    return substate.isTableItemsLoading;
  });

export const selectIsNextTableItemsLoading = () =>
  createSelector(selectDomain, substate => {
    return substate.isNextTableItemsLoading;
  });

// export const selectIsCategoriesOpen = () =>
//   createSelector(selectDomain, substate => {
//     return substate.isCategoriesOpen;
//   });

// export const selectIsCategoriesOpenOnce = () =>
//   createSelector(selectDomain, substate => {
//     return substate.isCategoriesOpenOnce;
//   });
