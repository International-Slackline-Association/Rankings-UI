import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';
import { ISelectOption } from 'types/application';

/* --- STATE --- */
interface AdminResultsState {
  readonly contestFilter: IFilter;
  readonly athleteFilters: IOrderedFilter[];
}

interface IFilter {
  readonly selectedValue?: ISelectOption;
  readonly suggestions?: ISelectOption[];
}
interface IOrderedFilter extends IFilter {
  readonly orderNumber: number;
}

/* --- ACTIONS --- */
type AdminResultsActions = ActionType<typeof actions>;

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = AdminResultsState;
type ContainerActions = AdminResultsActions;

export { RootState, ContainerState, ContainerActions };
