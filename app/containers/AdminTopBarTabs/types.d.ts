import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';
import { TopBarTabType, TopBarTabContentType } from 'types/enums';
import { LocationChangeAction } from 'connected-react-router';

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = AdminTopBarTabsState;
type ContainerActions = TopBarTabsActions;

export { RootState, ContainerState, ContainerActions };

/* --- STATE --- */
interface AdminTopBarTabsState {
  readonly selectedId: string;
}

/* --- ACTIONS --- */
type TopBarTabsActions = ActionType<typeof actions> | LocationChangeAction;
