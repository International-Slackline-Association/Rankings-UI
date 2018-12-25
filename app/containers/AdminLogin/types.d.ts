import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';
import { CustomError } from 'utils/error';

/* --- STATE --- */
interface AdminLoginState {
  readonly isAuthenticated: boolean;
  readonly loginError: CustomError | null;
  readonly isLoginLoading: boolean;
}

/* --- ACTIONS --- */
type AdminLoginActions = ActionType<typeof actions>;

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = AdminLoginState;
type ContainerActions = AdminLoginActions;

export { RootState, ContainerState, ContainerActions };
