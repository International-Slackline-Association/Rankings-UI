import { combineReducers } from 'redux';

import { ContainerState, ContainerActions } from './types';
import ActionTypes from './constants';

export const initialState: ContainerState = {
  id: '',
  contest: null,
  tableResult: { items: [], next: null },
  isTableItemsLoading: false,
  nextTableItemsCursor: null,
  isNextTableItemsLoading: false,
};

export default combineReducers<ContainerState, ContainerActions>({
  id: (state = initialState.id, action) => {
    return state;
  },
  contest: (state = initialState.contest, action) => {
    switch (action.type) {
      case ActionTypes.SET_CONTEST:
        return action.payload;
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
});
