import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = RankingsState;
type ContainerActions = RankingsActions;

export { RootState, ContainerState, ContainerActions };

/* --- STATE --- */

// tslint:disable-next-line:no-empty-interface
interface RankingsState {}

/* --- ACTIONS --- */
type RankingsActions = ActionType<typeof actions>;
