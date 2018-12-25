import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

/* --- STATE --- */
interface AdminAthleteState {
  readonly default: any;
}

/* --- ACTIONS --- */
type AdminAthleteActions = ActionType<typeof actions>;

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = AdminAthleteState;
type ContainerActions = AdminAthleteActions;

export { RootState, ContainerState, ContainerActions };
