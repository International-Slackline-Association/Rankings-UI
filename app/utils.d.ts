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

declare module 'redux-immutable' {
  import { combineReducers as rcr } from 'redux';
  const combineReducers: typeof rcr;
  export { combineReducers };
}
// declare module '*!raw' {
//   const content: string|any;
//   export default content;
// }
