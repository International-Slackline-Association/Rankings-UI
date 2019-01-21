import { action } from 'typesafe-actions';
import { TableItemsResult, ContestItem } from './types';
import ActionTypes from './constants';

export const setIdDiscipline = (id: string, discipline: string) =>
  action(ActionTypes.SET_ID_DISCIPLINE, { id: id, discipline: discipline });

export const loadContest = () => action(ActionTypes.LOAD_CONTEST);

export const setContest = (item: ContestItem) =>
  action(ActionTypes.SET_CONTEST, item);

export const loadTableItems = () => action(ActionTypes.LOAD_TABLE_ITEMS);

export const addTableItems = (result: TableItemsResult) => {
  return action(ActionTypes.ADD_TABLE_ITEMS, result);
};

export const loadNextItems = () => action(ActionTypes.LOAD_NEXT_TABLE_ITEMS);
