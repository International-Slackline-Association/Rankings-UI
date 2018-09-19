import { Dispatch, Reducer, Unsubscribe, ReducersMapObject, Store, Action } from 'redux';
import { RouterState } from 'react-router-redux';
import { ILanguageProviderProps } from 'containers/LanguageProvider';
import { TopBarTabsState } from 'containers/TopBarTabs/reducer';
import { Map } from 'immutable';

export interface LifeStore extends Store<{}> {
  injectedReducers?: any;
}

// export interface Action {
//   type: string;
//   [propName: string]: any;
// }

export interface InjectReducerParams {
  key: keyof ReduxState;
  reducer: Reducer<any>;
}

export interface InjectSagaParams {
  key: keyof ReduxState;
  saga: () => IterableIterator<any>;
  mode?: string;
}

// export interface ReduxState {
//   route: RouterState;
//   global: object;
//   language: ILanguageProviderProps;
//   [propName: string]: any;
// }

export interface ReduxState {
  route: RouterState;
  global: object;
  language: ILanguageProviderProps;
  topBarTabs: TopBarTabsState;
}

// type State = {[P in keyof RootState] : { [R in keyof RootState[P]]: RootState[P][R] }};
// export type State = {[P in keyof RootState]: RootState[P]};

// export type RootState = State<ReduxState>;
// export type State<T, U = any> = Map<keyof T, U>;

// export interface ImmutableMap<T, K, V> extends Map<K, V> {
//   toJS(): T;
//   get<I extends keyof T>(key: I & K): T[I] & V;
//   set<S extends keyof T>(key: S & K, value: T[S] & V): Map<K, V>;
// }

// export type RootState = ImmutableMap<ReduxState, string, rootLevelTypes>;

export interface State<T> extends Map<keyof T, any> {
  toJS(): T;
  get<K extends keyof T>(key: K): T[K] extends object ? State<T[K]> : T[K];
  // set<S extends keyof T>(key: S & K, value: T[S] & V): Map<K, V>;
}

export type ApplicationState = State<ReduxState>;
