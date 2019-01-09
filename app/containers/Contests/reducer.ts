import { combineReducers } from 'redux';

import { ContainerState, ContainerActions } from './types';
import ActionTypes from './constants';

export const initialState: ContainerState = {
  tableResult: { items: [], next: null },
  isTableItemsLoading: false,
  nextTableItemsCursor: null,
  isNextTableItemsLoading: false,
  categories: null,
  contestFilter: { suggestions: undefined },
  // isCategoriesOpen: false,
  // isCategoriesOpenOnce: false,
};

export default combineReducers<ContainerState, ContainerActions>({
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
  contestFilter: (state = initialState.contestFilter, action) => {
    switch (action.type) {
      case ActionTypes.SET_CONTEST_FILTER_SELECTED_VALUE:
        return { ...state, selectedValue: action.payload };
      case ActionTypes.SET_CONTEST_SUGGESTIONS:
        return { ...state, suggestions: action.payload };
      case ActionTypes.LOAD_CONTEST_SUGGESTIONS:
        return { ...state, suggestions: undefined };
    }
    return state;
  },
  nextTableItemsCursor: (state = initialState.nextTableItemsCursor, action) => {
    switch (action.type) {
      case ActionTypes.LOAD_TABLE_ITEMS:
        return {};
      case ActionTypes.ADD_TABLE_ITEMS:
        return action.payload.next;
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
  // isCategoriesOpen: (state = initialState.isCategoriesOpen, action) => {
  //   switch (action.type) {
  //     case ActionTypes.SET_CATEGORIES_STATUS:
  //       return action.payload;
  //   }
  //   return state;
  // },
  // isCategoriesOpenOnce: (state = initialState.isCategoriesOpenOnce, action) => {
  //   switch (action.type) {
  //     case ActionTypes.SET_CATEGORIES_STATUS:
  //       return true;
  //   }
  //   return state;
  // },
});
