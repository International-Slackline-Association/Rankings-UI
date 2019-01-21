import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';
import { TabContentState } from 'containers/GenericTabContent/types';
import { LocationChangeAction } from 'connected-react-router';
import { ICategoryEntity } from 'components/CategoriesFilters/types';
import { Discipline, ContestType } from 'types/application';

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
  readonly overallRank: string;
  readonly infoUrl: string;
}

interface TableItem {
  readonly id: string;
  readonly name: string;
  readonly contestType: ContestType;
  readonly date: string;
  readonly rank: number;
  readonly discipline: Discipline;
  readonly thumbnailUrl: string;
}

/* --- ACTIONS --- */
type AthleteActions = ActionType<typeof actions> | LocationChangeAction;
