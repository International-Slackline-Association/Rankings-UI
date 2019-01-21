import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

export const selectDomain = (state: ApplicationRootState) => {
  return state.contest ? state.contest : initialState;
};

export const selectId = () =>
  createSelector(selectDomain, substate => {
    return substate.id;
  });

export const selectDiscipline = () =>
  createSelector(selectDomain, substate => {
    return substate.discipline;
  });

export const selectContest = () =>
  createSelector(selectDomain, substate => {
    return substate.contest;
  });

export const isContestLoading = () =>
  createSelector(selectDomain, substate => {
    return substate.isContestLoading;
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
