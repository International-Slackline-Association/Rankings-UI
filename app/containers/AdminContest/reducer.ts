import { combineReducers } from 'redux';

import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  contestFilter: { suggestions: undefined },
  contest: null,
  isContestLoading: false,
  countryFilter: { suggestions: undefined },
  disciplines: [],
  contestCategories: [],
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
  contest: (state = initialState.contest, action) => {
    switch (action.type) {
      case ActionTypes.LOAD_CONTEST:
        return null;
      case ActionTypes.SET_CONTEST:
        return action.payload;
      case ActionTypes.CLEAR_FORM:
        return null;
    }
    return state;
  },
  isContestLoading: (state = initialState.isContestLoading, action) => {
    switch (action.type) {
      case ActionTypes.LOAD_CONTEST:
        return true;
      case ActionTypes.SET_CONTEST:
        return false;
    }
    return state;
  },
  countryFilter: (state = initialState.countryFilter, action) => {
    switch (action.type) {
      case ActionTypes.SET_COUNTRY_SUGGESTIONS:
        return { ...state, suggestions: action.payload };
      case ActionTypes.LOAD_COUNTRY_SUGGESTIONS:
        return { ...state, suggestions: undefined };
    }
    return state;
  },
  disciplines: (state = initialState.disciplines, action) => {
    switch (action.type) {
      case ActionTypes.LOAD_DISCIPLINES:
        return [];
      case ActionTypes.SET_DISCIPLINES:
        return action.payload;
    }
    return state;
  },
  contestCategories: (state = initialState.contestCategories, action) => {
    switch (action.type) {
      case ActionTypes.LOAD_CATEGORIES:
        return [];
      case ActionTypes.SET_CATEGORIES:
        return action.payload;
    }
    return state;
  },
});
