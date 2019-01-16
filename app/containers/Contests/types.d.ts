import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';
import { TabContentState } from 'containers/GenericTabContent/types';
import { ICategoryEntity } from 'components/CategoriesFilters/types';
import { ContestType, Discipline, ISelectOption } from 'types/application';

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
  readonly isNextTableItemsLoading: boolean;
}

export interface ICategory extends ICategoryEntity {}
export interface IFilter {
  readonly selectedValue?: ISelectOption;
  readonly suggestions?: ISelectOption[];
}

interface TableItem {
  readonly id: string;
  readonly name: string;
  readonly discipline: Discipline;
  readonly prize: string;
  readonly contestType: ContestType;
  readonly date: string;
  readonly smallProfileUrl: string;
}

/* --- ACTIONS --- */
type ContestsActions = ActionType<typeof actions>;
