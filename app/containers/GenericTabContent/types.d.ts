import { ActionType } from 'typesafe-actions';
import { ApplicationRootState } from 'types';
import { FilterItem } from './FilterItem';

/* --- EXPORTS --- */

export { TabContentState, SearchSuggestion, SelectedFilter, DropdownFilter };

/* --- STATE --- */

interface TabContentState<TableItem> {
  selectedFilters: SelectedFilter[];
  isSuggestionsLoading: boolean | null;
  suggestions: SearchSuggestion[] | null;
  selectedSearchInput: SearchSuggestion | null;
  tableItems: TableItem[] | null;
  isTableItemsLoading: boolean | null;
  dropdownFilters: DropdownFilter[];
}

interface SelectedFilter {
  id: string;
  category: string;
  name: string;
  isSticky: boolean;
}
interface SearchSuggestion {
  name: string;
}

interface DropdownFilter {
  category: string;
  items: FilterItem[];
}

