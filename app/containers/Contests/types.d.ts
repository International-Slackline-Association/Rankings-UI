import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';
import { TabContentState } from 'containers/GenericTabContent/types';
import { ICategoryEntity, ISelectOption } from 'components/CategoriesFilters/types';

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = ContestsState;
type ContainerActions = ContestsActions;

export { RootState, ContainerState, ContainerActions, TableItem };

/* --- STATE --- */

export interface TableItemsResult {
  items: TableItem[];
  next: any;
}

interface ContestsState {
  readonly categories: ICategory[] | null;
  readonly contestFilter: IFilter;
  readonly tableResult: TableItemsResult;
  readonly isTableItemsLoading: boolean | null;
  readonly nextTableItemsCursor: any;
  readonly isNextTableItemsLoading: boolean;
  // readonly isCategoriesOpen: boolean;
  // readonly isCategoriesOpenOnce: boolean;
}

export interface ICategory extends ICategoryEntity {}
export interface IFilter {
  selectedValue?: string;
  suggestions: ISelectOption[];
}

interface TableItem {
  id: string;
  name: string;
  discipline: string;
  prize: string;
  size: string;
  date: string;
  location: string;
  profileUrl: string;
}

/* --- ACTIONS --- */
type ContestsActions = ActionType<typeof actions>;
