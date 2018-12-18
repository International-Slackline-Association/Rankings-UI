import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';
import { TopBarTabType, TopBarTabContentType } from 'types/enums';
import { LocationChangeAction } from 'connected-react-router';

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = TopBarTabsState;
type ContainerActions = TopBarTabsActions;

export {
  RootState,
  ContainerState,
  ContainerActions,
  TopBarTabsItem,
  TopBarTabType,
};

/* --- STATE --- */
interface TopBarTabsState {
  readonly items: TopBarTabsItem[];
  readonly selectedId: string;
}

interface TopBarTabsItem {
  readonly id: string;
  readonly discipline?: string;
  readonly name: string;
  readonly type: TopBarTabType;
  readonly contentType: TopBarTabContentType;
}

/* --- ACTIONS --- */
type TopBarTabsActions = ActionType<typeof actions> | LocationChangeAction;
