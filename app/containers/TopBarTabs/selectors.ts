import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

const selectTopBarDomain = (state: ApplicationRootState) => {
  return state.topBarTabs ? state.topBarTabs : initialState;
};

const selectRouterDomain = (state: ApplicationRootState) => {
  return state.route;
};

const selectTabItems = () =>
  createSelector(selectTopBarDomain, state => {
    return state.items;
  });

const selectSelectedId = () =>
  createSelector(selectTopBarDomain, state => {
    return state.selectedId;
  });

const selectLocationPath = () =>
  createSelector(selectRouterDomain, state => {
    return state.location ? state.location.pathname : '';
  });

export { selectTabItems, selectSelectedId, selectLocationPath };
