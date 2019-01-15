import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

export const selectDomain = (state: ApplicationRootState) => {
  return state.contest ? state.contest : initialState;
};
export const selectTopbarDomain = (state: ApplicationRootState) => {
  return state.topBarTabs;
};

export const selectId = () =>
  createSelector(selectTopbarDomain, substate => {
    return substate.selectedId;
  });


export const selectDiscipline = () =>
  createSelector(selectTopbarDomain, substate => {
    return substate.selectedDiscipline;
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
