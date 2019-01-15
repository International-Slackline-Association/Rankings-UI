import { combineReducers } from 'redux';

import { ContainerState, ContainerActions } from './types';
import ActionTypes from './constants';

export const initialState: ContainerState = {
  athlete: null,
  isAthleteLoading: false,
  categories: null,
  tableResult: { items: [], next: null },
  isTableItemsLoading: false,
  isNextTableItemsLoading: false,
};

export default combineReducers<ContainerState, ContainerActions>({
  athlete: (state = initialState.athlete, action) => {
    switch (action.type) {
      case ActionTypes.SET_ATHLETE:
        return action.payload;
    }
    return state;
  },
  isAthleteLoading: (state = initialState.isAthleteLoading, action) => {
    switch (action.type) {
      case ActionTypes.LOAD_ATHLETE:
        return true;
      case ActionTypes.SET_ATHLETE:
        return false;
    }
    return state;
  },
  categories: (state = initialState.categories, action) => {
    switch (action.type) {
      case ActionTypes.SET_CATEGORIES:
        return action.payload;
      case ActionTypes.SET_CATEGORY_SELECTED_VALUE:
        const payload = action.payload;
        if (state) {
          return state.map((category, i) => {
            if (i === payload.index) {
              return { ...category, selectedValue: payload.value };
            }
            return { ...category };
          });
        }
    }
    return state;
  },
  tableResult: (state = initialState.tableResult, action) => {
    switch (action.type) {
      case ActionTypes.LOAD_TABLE_ITEMS:
        return initialState.tableResult;
      case ActionTypes.ADD_TABLE_ITEMS:
        return {
          items: [...state.items, ...action.payload.items],
          next: action.payload.next,
        };
    }
    return state;
  },
  isTableItemsLoading: (state = initialState.isTableItemsLoading, action) => {
    switch (action.type) {
      case ActionTypes.LOAD_TABLE_ITEMS:
        return true;
      case ActionTypes.ADD_TABLE_ITEMS:
        return false;
    }
    return state;
  },
  isNextTableItemsLoading: (
    state = initialState.isNextTableItemsLoading,
    action,
  ) => {
    switch (action.type) {
      case ActionTypes.LOAD_NEXT_TABLE_ITEMS:
        return true;
      case ActionTypes.ADD_TABLE_ITEMS:
        return false;
    }
    return state;
  },
});
