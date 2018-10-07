import { action } from 'typesafe-actions';
import { SearchSuggestion, SelectedFilter, TableItem } from './types';

import ActionTypes from './constants';

export const loadSuggestions = (input: string) => action(ActionTypes.LOAD_SUGGESTIONS, input);
export const setSuggestions = (suggestions: SearchSuggestion[]) => action(ActionTypes.SUGGESTIONS_LOADED, suggestions);
export const selectSuggestion = (suggestion: SearchSuggestion) => action(ActionTypes.SELECT_SUGGESTION, suggestion);
export const clearSuggestions = () => action(ActionTypes.CLEAR_SUGGESTIONS);
export const setSelectFilters = (filters: SelectedFilter[]) => action(ActionTypes.CHANGE_SELECTED_FILTERS, filters);
export const selectTableRow = (item: TableItem) => action(ActionTypes.SELECT_TABLE_ROW, item);
export const loadRankings = () => action(ActionTypes.LOAD_RANKINGS);
export const setRankings = (items: TableItem[]) => action(ActionTypes.SET_RANKINGS, items);
