import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';
import { TabContentState } from 'containers/GenericTabContent/types';
import { LocationChangeAction } from 'connected-react-router';

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = AthleteState;
type ContainerActions = ContestsActions;

export { RootState, ContainerState, ContainerActions, TableItem, AthleteItem };

/* --- STATE --- */

interface AthleteState extends TabContentState<TableItem> {
  athlete: AthleteItem | null;
}

interface AthleteItem {
  id: string;
  name: string;
  surname: string;
  age: number;
  profileUrl: string;
  overallRank: number;
  topDisciplines: string[];
}

interface TableItem {
  id: string;
  name: string;
  prize: string;
  size: string;
  date: string;
  rank: number;
  country: string;
  location: string;
  discipline: string;
  disciplines: string[];
  profileUrl: string;
}

/* --- ACTIONS --- */
type ContestsActions = ActionType<typeof actions> | LocationChangeAction;
