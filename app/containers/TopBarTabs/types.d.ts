import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { TopBarTabType } from './reducer';
import { ApplicationRootState } from 'types';

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = TopBarTabsState;
type ContainerActions = TopBarTabsActions;

export { ContainerState, ContainerActions, TopBarTabsItem, TopBarTabType };

/* --- STATE --- */
interface TopBarTabsState {
  readonly items: TopBarTabsItem[];
}

interface TopBarTabsItem {
  readonly id: string;
  readonly name: string;
  readonly isSelected: boolean;
  readonly type: TopBarTabType;
}



/* --- ACTIONS --- */
type TopBarTabsActions = ActionType<typeof actions>;
