import { action } from 'typesafe-actions';
import { TableItemsResult, AthleteItem, ICategory } from './types';
import ActionTypes from './constants';

export const setId = (id: string) =>
  action(ActionTypes.SET_ID, id);

export const loadAthlete = () => action(ActionTypes.LOAD_ATHLETE);

export const setAthlete = (item: AthleteItem) =>
  action(ActionTypes.SET_ATHLETE, item);

export const loadCategories = () => action(ActionTypes.LOAD_CATEGORIES);

export const setCategories = (categories: ICategory[]) =>
  action(ActionTypes.SET_CATEGORIES, categories);

export const setCategorySelectedValue = (index: number, value: string) =>
  action(ActionTypes.SET_CATEGORY_SELECTED_VALUE, {
    index: index,
    value: value,
  });

export const loadTableItems = () => action(ActionTypes.LOAD_TABLE_ITEMS);

export const addTableItems = (result: TableItemsResult) => {
  return action(ActionTypes.ADD_TABLE_ITEMS, result);
};

export const loadNextItems = () => action(ActionTypes.LOAD_NEXT_TABLE_ITEMS);
