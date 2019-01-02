import { action } from 'typesafe-actions';

import ActionTypes from './constants';
import { ICategory, TableItemsResult } from './types';
import { ISelectOption } from 'types/application';

export const loadCategories = () => action(ActionTypes.LOAD_CATEGORIES);

export const setCategories = (categories: ICategory[]) =>
  action(ActionTypes.SET_CATEGORIES, categories);

export const setCategorySelectedValue = (index: number, value: string) =>
  action(ActionTypes.SET_CATEGORY_SELECTED_VALUE, {
    index: index,
    value: value,
  });

export const loadContestSuggestions = (value: string) =>
  action(ActionTypes.LOAD_CONTEST_SUGGESTIONS, value);

export const setContestSuggestions = (items: ISelectOption[]) =>
  action(ActionTypes.SET_CONTEST_SUGGESTIONS, items);

export const setContestFilterSelectedValue = (value: string) =>
  action(ActionTypes.SET_CONTEST_FILTER_SELECTED_VALUE, value);

export const loadTableItems = () => action(ActionTypes.LOAD_TABLE_ITEMS);

export const addTableItems = (result: TableItemsResult) => {
  return action(ActionTypes.ADD_TABLE_ITEMS, result);
};

export const loadNextItems = () => action(ActionTypes.LOAD_NEXT_TABLE_ITEMS);

// export const setCategoriesStatus = (status: boolean) => action(ActionTypes.SET_CATEGORIES_STATUS, status);
