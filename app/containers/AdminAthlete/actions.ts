import { action } from 'typesafe-actions';
import { Athlete } from './types';

import ActionTypes from './constants';
import { ISelectOption } from 'types/application';

export const loadAthleteSuggestions = (value: string) =>
  action(ActionTypes.LOAD_ATHLETE_SUGGESTIONS, value);

export const setAthleteSuggestions = (items: ISelectOption[]) =>
  action(ActionTypes.SET_ATHLETE_SUGGESTIONS, items);

export const setAthleteFilterSelectedValue = (value: string) =>
  action(ActionTypes.SET_ATHLETE_FILTER_SELECTED_VALUE, value);

export const loadAthlete = (id: string) => action(ActionTypes.LOAD_ATHLETE, id);

export const setAthlete = (athlete: Athlete) =>
  action(ActionTypes.SET_ATHLETE, athlete);

export const loadCountrySuggestions = (value: string) =>
  action(ActionTypes.LOAD_COUNTRY_SUGGESTIONS, value);

export const setCountrySuggestions = (items: ISelectOption[]) =>
  action(ActionTypes.SET_COUNTRY_SUGGESTIONS, items);

export const clearForm = () => action(ActionTypes.CLEAR_FORM);
