import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';
import { TabContentState } from 'containers/GenericTabContent/types';
import {
  ICategoryEntity,
  IFilterEntity,
} from 'components/CategoriesFilters/types';
import { ISelectOption } from 'types/application';

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = RankingsState;
type ContainerActions = RankingsActions;

export { RootState, ContainerState, ContainerActions };

/* --- STATE --- */
interface RankingsState {
  readonly categories: ICategory[] | null;
  readonly athleteFilter: IFilter;
  readonly countryFilter: IFilter;
  readonly tableResult: TableItemsResult;
  readonly isTableItemsLoading: boolean | null;
  readonly nextTableItemsCursor: any;
  readonly isNextTableItemsLoading: boolean;
}

export interface ICategory extends ICategoryEntity {}
export interface IFilter {
  readonly selectedValue?: ISelectOption;
  readonly suggestions?: ISelectOption[];
}

export interface TableItemsResult {
  readonly items: TableItem[];
  readonly next: any;
}

interface TableItem {
  readonly id: string;
  readonly rank: number;
  readonly name: string;
  readonly surname: string;
  readonly age: number;
  readonly country: string;
  readonly points: string;
  readonly smallProfileUrl: string;
}

/* --- ACTIONS --- */
type RankingsActions = ActionType<typeof actions>;
