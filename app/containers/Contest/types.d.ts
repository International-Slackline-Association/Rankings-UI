import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';
import { TabContentState } from 'containers/GenericTabContent/types';
import { LocationChangeAction } from 'connected-react-router';
import { Discipline, ContestCategory } from 'types/application';

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = ContestState;
type ContainerActions = ContestActions;

export { RootState, ContainerState, ContainerActions };

/* --- STATE --- */

interface ContestState {
  readonly contest: ContestItem | null;
  readonly isContestLoading: boolean;
  readonly tableResult: TableItemsResult;
  readonly isTableItemsLoading: boolean;
  readonly isNextTableItemsLoading: boolean;
}

export interface ContestItem {
  readonly id: string;
  readonly name: string;
  readonly prize: string;
  readonly contestCategory: ContestCategory;
  readonly date: string;
  readonly location: string;
  readonly discipline: Discipline;
  readonly profileUrl: string;
  readonly infoUrl: string;
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
  readonly points: number;
  readonly thumbnailUrl: string;
}

/* --- ACTIONS --- */
type ContestActions = ActionType<typeof actions> | LocationChangeAction;
