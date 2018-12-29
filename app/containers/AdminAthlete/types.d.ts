import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';
import { ISelectOption } from 'components/CategoriesFilters/types';

export interface Athlete {
  name: string;
  surname: string;
}

export interface AthleteFormValues extends Athlete {}

/* --- STATE --- */
interface AdminAthleteState {
  readonly athleteFilter: IFilter;
  readonly athlete: Athlete | null;
  readonly isAthleteLoading: boolean;
}

export interface IFilter {
  readonly selectedValue?: string;
  readonly suggestions: ISelectOption[];
}

/* --- ACTIONS --- */
type AdminAthleteActions = ActionType<typeof actions>;

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = AdminAthleteState;
type ContainerActions = AdminAthleteActions;

export { RootState, ContainerState, ContainerActions };
