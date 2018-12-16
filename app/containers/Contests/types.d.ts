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
  readonly items: TableItem[];
  readonly next: any;
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
  readonly selectedValue?: string;
  readonly suggestions: ISelectOption[];
}

interface TableItem {
  readonly id: string;
  readonly name: string;
  readonly discipline: string;
  readonly prize: string;
  readonly size: string;
  readonly date: string;
  readonly smallProfileUrl: string;
}

/* --- ACTIONS --- */
type ContestsActions = ActionType<typeof actions>;
