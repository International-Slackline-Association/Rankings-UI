import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';
import { TabContentState } from 'containers/GenericTabContent/types';
import { LocationChangeAction } from 'connected-react-router';

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = ContestState;
type ContainerActions = ContestsActions;

export { RootState, ContainerState, ContainerActions };

/* --- STATE --- */

interface ContestState {
  readonly id: string;
  readonly discipline: string;
  readonly contest: ContestItem | null;
  readonly isContestLoading: boolean;
  readonly tableResult: TableItemsResult;
  readonly isTableItemsLoading: boolean;
  readonly nextTableItemsCursor: any;
  readonly isNextTableItemsLoading: boolean;
}

export interface ContestItem {
  readonly id: string;
  readonly name: string;
  readonly prize: string;
  readonly size: string;
  readonly date: string;
  readonly location: string;
  readonly discipline: string;
  readonly profileUrl: string;
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
type ContestsActions = ActionType<typeof actions> | LocationChangeAction;
