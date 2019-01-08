import { combineReducers } from 'redux';

import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  contestFilter: { suggestions: undefined },
  athleteFilters: [{ suggestions: undefined }],
};

export default combineReducers<ContainerState, ContainerActions>({
  contestFilter: (state = initialState.contestFilter, action) => {
    switch (action.type) {
      case ActionTypes.SET_CONTEST_FILTER_SELECTED_VALUE:
        return { ...state, selectedValue: action.payload };
      case ActionTypes.SET_CONTEST_SUGGESTIONS:
        return { ...state, suggestions: action.payload };
      case ActionTypes.LOAD_CONTEST_SUGGESTIONS:
        return { ...state, suggestions: undefined };
      case ActionTypes.CLEAR_FORM:
        return initialState.contestFilter;
    }
    return state;
  },
  athleteFilters: (state = initialState.athleteFilters, action) => {
    switch (action.type) {
      case ActionTypes.SET_ATHLETE_FILTER_SELECTED_VALUE:
        let filters = [...state];
        const toChange = filters[action.payload.index];
        filters[action.payload.index] = {
          suggestions: toChange.suggestions,
          selectedValue: action.payload.value,
        };
        return filters;
      case ActionTypes.SET_ATHLETE_SUGGESTIONS:
        filters = [...state];
        filters[action.payload.index] = {
          suggestions: action.payload.items,
          selectedValue: filters[action.payload.index].selectedValue,
        };
        return filters;
      case ActionTypes.LOAD_ATHLETE_SUGGESTIONS:
        filters = [...state];
        filters[action.payload.index] = {
          suggestions: undefined,
          selectedValue: filters[action.payload.index].selectedValue,
        };
        return filters;
      case ActionTypes.ADD_ATHLETE_FILTER:
        filters = [...state, { suggestions: undefined }];
        return filters;
      case ActionTypes.CLEAR_FORM:
        return initialState.athleteFilters;
    }
    return state;
  },

});
