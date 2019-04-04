import { combineReducers } from 'redux';

import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  contestFilter: { suggestions: undefined },
  contest: {
    id: '',
    name: '',
    country: '',
    city: '',
    contestType: { id: -1, name: '' },
    contestGender: { id: -1, name: '' },
    date: '',
    discipline: { id: -1, name: '' },
    prize: 0,
    profileUrl: '',
    infoUrl: '',
  },
  isContestLoading: false,
  countryFilter: { suggestions: undefined },
  disciplines: [],
  contestTypes: [],
  contestGenders: [],
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
        return initialState.contest;
      case ActionTypes.SET_CONTEST:
        return action.payload;
      case ActionTypes.CLEAR_FORM:
        return initialState.contest;
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
  contestTypes: (state = initialState.contestTypes, action) => {
    switch (action.type) {
      case ActionTypes.LOAD_CATEGORIES:
        return [];
      case ActionTypes.SET_CATEGORIES:
        return action.payload;
    }
    return state;
  },
  contestGenders: (state = initialState.contestGenders, action) => {
    switch (action.type) {
      case ActionTypes.LOAD_GENDERS:
        return [];
      case ActionTypes.SET_GENDERS:
        return action.payload;
    }
    return state;
  },
});
