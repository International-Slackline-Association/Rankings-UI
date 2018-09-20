// declare module '*.css' {
//   const content: string|any;
//   export default content;
// }

declare module '*.svg' {
  const content: string | any;
  export default content;
}

declare module '*.svg?file' {
  const content: string | any;
  export default content;
}

// Redux immutable typings are not compatible and type-forcing. Override and fix
// declare module 'redux-immutable' {
//   import { ImmutableState } from 'types';
//   import { Action, Reducer, AnyAction } from 'redux';
//   type ReducersMapObject<S = any, A extends Action = Action> = { [K in keyof S]: Reducer< S[K] extends object ? ImmutableState<S[K]> : S[K], A> };
//   function combineReducers<S, A extends Action = AnyAction>(reducers: ReducersMapObject<S, A>): Reducer<S, A>;
//   export { combineReducers };
// }

// declare module '*!raw' {
//   const content: string|any;
//   export default content;
// }
