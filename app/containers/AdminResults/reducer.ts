import { combineReducers } from 'redux';

import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  contestFilter: { suggestions: undefined },
  athleteFilters: [{ suggestions: undefined, orderNumber: 1 }],
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
        filters[action.payload.index] = {
          ...filters[action.payload.index],
          selectedValue: action.payload.value,
        };
        return filters;
      case ActionTypes.CHANGE_ATHLETE_FILTER_ORDER:
        filters = [...state];
        filters[action.payload.index] = {
          ...filters[action.payload.index],
          orderNumber: action.payload.value,
        };
        return filters;
      case ActionTypes.SET_ATHLETE_SUGGESTIONS:
        filters = [...state];
        filters[action.payload.index] = {
          ...filters[action.payload.index],
          suggestions: action.payload.items,
        };
        return filters;
      case ActionTypes.LOAD_ATHLETE_SUGGESTIONS:
        filters = [...state];
        filters[action.payload.index] = {
          ...filters[action.payload.index],
          suggestions: undefined,
        };
        return filters;
      case ActionTypes.ADD_ATHLETE_FILTER:
        filters = [
          ...state,
          { suggestions: undefined, orderNumber: state.length + 1 },
        ];
        return filters;
      case ActionTypes.CLEAR_FORM:
        return initialState.athleteFilters;
    }
    return state;
  },
});
