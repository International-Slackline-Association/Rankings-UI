import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';
import { TabContentState } from 'containers/GenericTabContent/types';
import {
  ISelectOption,
  ICategoryEntity,
  IFilterEntity,
} from 'components/CategoriesFilters/types';

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = RankingsState;
type ContainerActions = RankingsActions;

export { RootState, ContainerState, ContainerActions, TableItem };

/* --- STATE --- */
interface RankingsState {
  readonly categories: ICategory[] | null;
  readonly filters: IFilter[] | null;
  readonly tableItems: TableItem[] | null;
  readonly isTableItemsLoading: boolean | null;
}

export interface ICategory extends ICategoryEntity {}
export interface IFilter extends IFilterEntity {}

interface TableItem {
  readonly id: string;
  readonly rank: number;
  readonly name: string;
  readonly surname: string;
  readonly age: number;
  readonly country: string;
  readonly points: string;
  readonly profileUrl: string;
  readonly overallRank: number;
  readonly topDisciplines: string[];
}

/* --- ACTIONS --- */
type RankingsActions = ActionType<typeof actions>;
