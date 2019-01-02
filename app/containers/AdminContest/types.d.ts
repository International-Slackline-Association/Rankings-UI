import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';
import { Discipline, ContestCategory, ISelectOption } from 'types/application';

export interface Contest {
  readonly id: string;
  readonly name: string;
  readonly date: string;
  readonly city: string;
  readonly country: string;
  readonly discipline: Discipline;
  readonly contestCategory: ContestCategory;
  readonly prize: number;
  readonly profileUrl: string;
}

export interface ContestFormValues extends Contest {}

/* --- STATE --- */
interface AdminContestState {
  readonly contestFilter: IFilter;
  readonly contest: Contest | null;
  readonly isContestLoading: boolean;
  readonly countryFilter: IFilter;
  readonly contestCategories: ISelectOption[];
  readonly disciplines: ISelectOption[];
}

export interface IFilter {
  readonly selectedValue?: string;
  readonly suggestions: ISelectOption[];
}

/* --- ACTIONS --- */
type AdminContestActions = ActionType<typeof actions>;

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = AdminContestState;
type ContainerActions = AdminContestActions;

export { RootState, ContainerState, ContainerActions };
