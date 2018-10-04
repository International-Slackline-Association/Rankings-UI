import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = RankingsState;
type ContainerActions = RankingsActions;

export { RootState, ContainerState, ContainerActions, SearchSuggestion };

/* --- STATE --- */

interface RankingsState {
  selectedFilters: SelectedFilter[];
}

interface SelectedFilter {
  id: string;
  category: string;
  name: string;
}

interface SearchSuggestion {
  name: string;
}
/* --- ACTIONS --- */
type RankingsActions = ActionType<typeof actions>;
