import { action } from 'typesafe-actions';
import { Contest } from './types';

import ActionTypes from './constants';
import { ISelectOption } from 'types/application';

export const loadContestSuggestions = (value: string) =>
  action(ActionTypes.LOAD_CONTEST_SUGGESTIONS, value);

export const setContestSuggestions = (items: ISelectOption[]) =>
  action(ActionTypes.SET_CONTEST_SUGGESTIONS, items);

export const setContestFilterSelectedValue = (value: string) =>
  action(ActionTypes.SET_CONTEST_FILTER_SELECTED_VALUE, value);

export const loadContest = (id: string, discipline: number) =>
  action(ActionTypes.LOAD_CONTEST, { id: id, discipline: discipline });

export const setContest = (contest: Contest) =>
  action(ActionTypes.SET_CONTEST, contest);

export const loadCountrySuggestions = (value: string) =>
  action(ActionTypes.LOAD_COUNTRY_SUGGESTIONS, value);

export const setCountrySuggestions = (items: ISelectOption[]) =>
  action(ActionTypes.SET_COUNTRY_SUGGESTIONS, items);

export const clearForm = () => action(ActionTypes.CLEAR_FORM);

export const loadDisciplines = () => action(ActionTypes.LOAD_DISCIPLINES);

export const setDisciplines = (disciplines: ISelectOption[]) =>
  action(ActionTypes.SET_DISCIPLINES, disciplines);

export const loadContestCategories = () => action(ActionTypes.LOAD_CATEGORIES);

export const setContestCategories = (categories: ISelectOption[]) =>
  action(ActionTypes.SET_CATEGORIES, categories);
