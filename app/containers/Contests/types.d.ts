import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';
import { TabContentState } from 'containers/GenericTabContent/types';

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = ContestsState;
type ContainerActions = ContestsActions;

export { RootState, ContainerState, ContainerActions, TableItem };

/* --- STATE --- */

interface ContestsState extends TabContentState<TableItem> {}

interface TableItem {
  id: string;
  name: string;
  discipline: string;
  prize: string;
  size: string;
  date: string;
  location: string;
  disciplines: string[];
  profileUrl: string;
}

/* --- ACTIONS --- */
type ContestsActions = ActionType<typeof actions>;
