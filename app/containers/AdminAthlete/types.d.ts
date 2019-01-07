import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';
import { ISelectOption } from 'types/application';

export interface Athlete {
  readonly id: string;
  readonly name: string;
  readonly surname: string;
  readonly profileUrl: string;
  readonly country: string;
  readonly gender: number;
  readonly birthdate: string;
  readonly email: string;
  readonly city: string;
  readonly infoUrl: string;
}

export interface AthleteFormValues extends Athlete {}

/* --- STATE --- */
interface AdminAthleteState {
  readonly athleteFilter: IFilter;
  readonly athlete: Athlete | null;
  readonly isAthleteLoading: boolean;
  readonly countryFilter: IFilter;
}

interface IFilter {
  readonly selectedValue?: string;
  readonly suggestions?: ISelectOption[];
}

/* --- ACTIONS --- */
type AdminAthleteActions = ActionType<typeof actions>;

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = AdminAthleteState;
type ContainerActions = AdminAthleteActions;

export { RootState, ContainerState, ContainerActions };
