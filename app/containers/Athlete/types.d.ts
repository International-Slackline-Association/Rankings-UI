import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';
import { TabContentState } from 'containers/GenericTabContent/types';
import { LocationChangeAction } from 'connected-react-router';
import { ICategoryEntity } from 'components/CategoriesFilters/types';

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = AthleteState;
type ContainerActions = AthleteActions;

export { RootState, ContainerState, ContainerActions, TableItem, AthleteItem };

/* --- STATE --- */

interface AthleteState {
  readonly id: string;
  readonly athlete: AthleteItem | null;
  readonly categories: ICategory[] | null;
  readonly isAthleteLoading: boolean;
  readonly tableResult: TableItemsResult;
  readonly isTableItemsLoading: boolean;
  readonly nextTableItemsCursor: any;
  readonly isNextTableItemsLoading: boolean;
}

export interface TableItemsResult {
  readonly items: TableItem[];
  readonly next: any;
}

export interface ICategory extends ICategoryEntity {}

interface AthleteItem {
  readonly id: string;
  readonly name: string;
  readonly surname: string;
  readonly country: string;
  readonly age: number;
  readonly profileUrl: string;
  readonly overallRank: number;
}

interface TableItem {
  readonly id: string;
  readonly name: string;
  readonly size: string;
  readonly date: string;
  readonly rank: number;
  readonly discipline: string;
  readonly smallProfileUrl: string;
}

/* --- ACTIONS --- */
type AthleteActions = ActionType<typeof actions> | LocationChangeAction;