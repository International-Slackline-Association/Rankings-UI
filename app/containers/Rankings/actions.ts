import { action } from 'typesafe-actions';
import { ICategory, TableItemsResult } from './types';
import ActionTypes from './constants';
import { ISelectOption } from 'types/application';

export const loadCategories = (autoSelect?: string[]) =>
  action(ActionTypes.LOAD_CATEGORIES, autoSelect);

export const setCategories = (categories: ICategory[]) =>
  action(ActionTypes.SET_CATEGORIES, categories);

export const setCategorySelectedValue = (index: number, value: string) =>
  action(ActionTypes.SET_CATEGORY_SELECTED_VALUE, {
    index: index,
    value: value,
  });

export const loadAthleteSuggestions = (value: string) =>
  action(ActionTypes.LOAD_ATHLETE_SUGGESTIONS, value);

export const loadCountrySuggestions = (value: string) =>
  action(ActionTypes.LOAD_COUNTRY_SUGGESTIONS, value);

export const setAthleteSuggestions = (items: ISelectOption[]) =>
  action(ActionTypes.SET_ATHLETE_SUGGESTIONS, items);

export const setCountrySuggestions = (items: ISelectOption[]) =>
  action(ActionTypes.SET_COUNTRY_SUGGESTIONS, items);

export const setAthleteFilterSelectedValue = (option: ISelectOption) =>
  action(ActionTypes.SET_ATHLETE_FILTER_SELECTED_VALUE, option);

export const setCountryFilterSelectedValue = (option: ISelectOption) =>
  action(ActionTypes.SET_COUNTRY_FILTER_SELECTED_VALUE, option);

export const loadTableItems = () => action(ActionTypes.LOAD_TABLE_ITEMS);

export const addTableItems = (result: TableItemsResult) => {
  return action(ActionTypes.ADD_TABLE_ITEMS, result);
};

export const loadNextItems = () => action(ActionTypes.LOAD_NEXT_TABLE_ITEMS);
