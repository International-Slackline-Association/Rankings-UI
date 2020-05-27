import { RootState } from 'types';
import { initialState } from './slice';
import { createSelector } from '@reduxjs/toolkit';

const selectTopBarDomain = (state: RootState) => {
  return state.topBarTabs || initialState;
};

export const selectTabItems = createSelector([selectTopBarDomain], state => {
  return state.items;
});

export const selectSelectedId = createSelector([selectTopBarDomain], state => {
  return state.selectedId;
});
