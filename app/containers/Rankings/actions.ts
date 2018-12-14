import { action } from 'typesafe-actions';
import { TableItem, ICategory } from './types';

import ActionTypes from './constants';
import {
  SearchSuggestion,
  SelectedFilter,
} from 'containers/GenericTabContent/types';

// export const loadSuggestions = (input: string) =>
//   action(ActionTypes.LOAD_SUGGESTIONS, input);
// export const setSuggestions = (suggestions: SearchSuggestion[]) =>
//   action(ActionTypes.SUGGESTIONS_LOADED, suggestions);
// export const selectSuggestion = (suggestion: SearchSuggestion) =>
//   action(ActionTypes.SELECT_SUGGESTION, suggestion);
// export const clearSuggestions = (clearSearchInput: boolean) =>
//   action(ActionTypes.CLEAR_SUGGESTIONS, clearSearchInput);
// export const setSelectFilters = (filters: SelectedFilter[]) =>
//   action(ActionTypes.CHANGE_SELECTED_FILTERS, filters);

export const loadCategories = () => action(ActionTypes.LOAD_CATEGORIES);

export const setCategories = (categories: ICategory[]) =>
  action(ActionTypes.SET_CATEGORIES, categories);

export const setCategorySelectedValue = (index: number, value: string) =>
  action(ActionTypes.SET_CATEGORY_SELECTED_VALUE, { index: index, value: value });

export const selectTableRow = (item: TableItem) =>
  action(ActionTypes.SELECT_TABLE_ROW, item);
export const loadTableItems = () => action(ActionTypes.LOAD_TABLE_ITEMS);
export const setTableItems = (items: TableItem[]) =>
  action(ActionTypes.SET_TABLE_ITEMS, items);
