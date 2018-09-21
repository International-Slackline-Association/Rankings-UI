/*
 *
 * Rankings reducer
 *
 */

import { combineReducers } from 'redux';

// import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {};

// function rankingsReducer(state: ContainerState = initialState, action: ContainerActions ) {
//   switch (action.type) {
//     case ActionTypes.DEFAULT_ACTION:
//       return state;
//     default:
//       return state;
//   }
// }

// export default rankingsReducer;

export default combineReducers<ContainerState, ContainerActions>({});
