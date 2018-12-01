import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';
import { TabContentState } from 'containers/GenericTabContent/types';
import { LocationChangeAction } from 'connected-react-router';

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = ContestState;
type ContainerActions = ContestsActions;

export { RootState, ContainerState, ContainerActions, TableItem, ContestItem };

/* --- STATE --- */

interface ContestState extends TabContentState<TableItem> {
  contest: ContestItem | null;
}

interface ContestItem {
  id: string;
  name: string;
  prize: string;
  size: string;
  date: string;
  location: string;
  disciplines: string[];
  profileUrl: string;
}

interface TableItem {
  id: string;
  rank: number;
  name: string;
  surname: string;
  age: number;
  country: string;
  points: string;
  profileUrl: string;
  overallRank: number;
  topDisciplines: string[];
}

/* --- ACTIONS --- */
type ContestsActions = ActionType<typeof actions> | LocationChangeAction;
