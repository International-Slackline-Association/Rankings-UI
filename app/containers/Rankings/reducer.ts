/*
 *
 * Rankings reducer
 *
 */

import { combineReducers } from 'redux';

// import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';
import { defaultFilters } from './filters';
import ActionTypes from './constants';

const filters = defaultFilters();
export const initialState: ContainerState = {
  selectedFilters: [
    {
      id: filters[0].items[0].id,
      category: filters[0].items[0].category,
      name: filters[0].items[0].name,
      isSticky: filters[0].items[0].isSticky,
    },
    {
      id: filters[1].items[1].id,
      category: filters[1].items[1].category,
      name: filters[1].items[1].name,
      isSticky: filters[1].items[1].isSticky,
    },
  ],
  isSuggestionsLoading: false,
  tableItems: null,
  selectedSearchInput: null,
  suggestions: [],
  isRankingsLoading: false,
  dropdownFilters: filters,
};

// function rankingsReducer(state: ContainerState = initialState, action: ContainerActions ) {
//   switch (action.type) {
//     case ActionTypes.DEFAULT_ACTION:
//       return state;
//     default:
//       return state;
//   }
// }

// export default rankingsReducer;

export default combineReducers<ContainerState, ContainerActions>({
  selectedFilters: (state = initialState.selectedFilters, action) => {
    switch (action.type) {
      case ActionTypes.CHANGE_SELECTED_FILTERS:
        return action.payload;
    }
    return state;
  },
  isSuggestionsLoading: (state = false, action) => {
    switch (action.type) {
      case ActionTypes.LOAD_SUGGESTIONS:
        return true;
      case ActionTypes.SUGGESTIONS_LOADED:
        return false;
    }
    return state;
  },
  selectedSearchInput: (state = null, action) => {
    switch (action.type) {
      case ActionTypes.SELECT_SUGGESTION:
        return action.payload;
      case ActionTypes.CLEAR_SUGGESTIONS:
        return state;
    }
    return state;
  },
  suggestions: (state = null, action) => {
    switch (action.type) {
      case ActionTypes.SUGGESTIONS_LOADED:
        return action.payload;
      case ActionTypes.CLEAR_SUGGESTIONS:
        return null;
    }
    return state;
  },
  tableItems: (state = null, action) => {
    switch (action.type) {
      case ActionTypes.LOAD_RANKINGS:
        return null;
      case ActionTypes.SET_RANKINGS:
        return action.payload;
    }
    return state;
  },
  isRankingsLoading: (state = false, action) => {
    switch (action.type) {
      case ActionTypes.LOAD_RANKINGS:
        return true;
      case ActionTypes.SET_RANKINGS:
        return false;
    }
    return state;
  },
  dropdownFilters: (state = initialState.dropdownFilters, action) => {
    switch (action.type) {
      case ActionTypes.CHANGE_SELECTED_FILTERS:
        const selectedFilters = action.payload;
        const initialFilters = defaultFilters(false);
        for (const selectedFilter of selectedFilters) {
          for (const filterCategory of initialFilters) {
            for (const filter of filterCategory.items) {
              if (filter.id === selectedFilter.id) {
                filter.isSelected = true;
              }
            }
          }
        }
        return initialFilters;
    }
    return state;
  },
});
