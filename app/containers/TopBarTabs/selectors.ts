import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

const selectTopBarDomain = (state: ApplicationRootState) => {
  return state.topBarTabs ? state.topBarTabs : initialState;
};

const selectTabItems = () =>
  createSelector(selectTopBarDomain, state => {
    return state.items; // return all items
  });

const selectSelectedId = () =>
  createSelector(selectTopBarDomain, state => {
    return state.selectedId;
  });

export { selectTabItems, selectSelectedId };
