import { Reducer, Store } from 'redux';
import { RouterState } from 'connected-react-router';
import { ILanguageProviderProps } from 'containers/LanguageProvider';
// import { Map } from 'immutable';
import { ContainerState as TopBarState } from 'containers/TopBarTabs/types';
import { ContainerState as RankingsState } from 'containers/Rankings/types';
import { ContainerState as ContestsState } from 'containers/Contests/types';
import { ContainerState as ContestState } from 'containers/Contest/types';
import { ContainerState as AthleteState } from 'containers/Athlete/types';

export interface LifeStore extends Store<{}> {
  injectedReducers?: any;
  injectedSagas?: any;
  runSaga(saga: () => IterableIterator<any>, args: any): any;
}

export interface InjectReducerParams {
  key: keyof ApplicationRootState;
  reducer: Reducer<any, any>;
}

export interface InjectSagaParams {
  key: keyof ApplicationRootState;
  saga: () => IterableIterator<any>;
  mode?: string | undefined;
}

export interface ApplicationRootState {
  readonly router: RouterState;
  readonly global: object;
  readonly language: ILanguageProviderProps;
  readonly topBarTabs: TopBarState;
  readonly rankings: RankingsState;
  readonly contests: ContestsState;
  readonly contest: ContestState;
  readonly athlete: AthleteState;
}
