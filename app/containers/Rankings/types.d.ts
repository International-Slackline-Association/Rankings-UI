import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';
import { FilterItem } from './filters';

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = RankingsState;
type ContainerActions = RankingsActions;

export { RootState, ContainerState, ContainerActions, SearchSuggestion, SelectedFilter, TableItem, DropdownFilter };

/* --- STATE --- */

interface RankingsState {
  selectedFilters: SelectedFilter[];
  isSuggestionsLoading: boolean | null;
  suggestions: SearchSuggestion[] | null;
  selectedSearchInput: SearchSuggestion | null;
  tableItems: TableItem[] | null;
  isRankingsLoading: boolean | null;
  dropdownFilters: DropdownFilter[]
}

interface SelectedFilter {
  id: string;
  category: string;
  name: string;
  isSticky: boolean;
}

interface TableItem {
  id: string;
  rank: number;
  name: string;
  age: number;
  country: string;
  points: string;
}

interface SearchSuggestion {
  name: string;
}

interface DropdownFilter {
  category: string;
  items: FilterItem[];
}

/* --- ACTIONS --- */
type RankingsActions = ActionType<typeof actions>;
