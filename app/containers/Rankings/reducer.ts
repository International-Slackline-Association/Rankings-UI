/*
 *
 * Rankings reducer
 *
 */

import { combineReducers } from 'redux';

// import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';
import ActionTypes from './constants';

export const initialState: ContainerState = {
  tableItems: null,
  isTableItemsLoading: false,
  categories: null,
  filters: [
    {
      title: 'Athlete',
      placeholder: 'Name of the athlete',
    },
    {
      title: 'Country',
      placeholder: 'Country Code',
    },
  ],
};

export default combineReducers<ContainerState, ContainerActions>({
  tableItems: (state = null, action) => {
    switch (action.type) {
      case ActionTypes.LOAD_TABLE_ITEMS:
        return null;
      case ActionTypes.SET_TABLE_ITEMS:
        return action.payload;
    }
    return state;
  },
  isTableItemsLoading: (state = false, action) => {
    switch (action.type) {
      case ActionTypes.LOAD_TABLE_ITEMS:
        return true;
      case ActionTypes.SET_TABLE_ITEMS:
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
  filters: (state = initialState.filters, action) => {
    switch (action.type) {
      case ActionTypes.SET_CATEGORIES:
        return state;
    }
    return state;
  },
});
