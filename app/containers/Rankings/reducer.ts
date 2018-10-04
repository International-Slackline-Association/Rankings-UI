/*
 *
 * Rankings reducer
 *
 */

import { combineReducers } from 'redux';

// import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';
import { defaultFilters } from './filters';

const filters = defaultFilters();
export const initialState: ContainerState = {
  selectedFilters: [
    {
      id: filters[0].items[0].id,
      category: filters[0].items[0].category,
      name: filters[0].items[0].name,
    },
    {
      id: filters[1].items[0].id,
      category: filters[1].items[0].category,
      name: filters[1].items[0].name,
    },
  ],
};

// function rankingsReducer(state: ContainerState = initialState, action: ContainerActions ) {
//   switch (action.type) {
//     case ActionTypes.DEFAULT_ACTION:
//       return state;
//     default:
//       return state;
//   }
// }

// export default rankingsReducer;

export default combineReducers<ContainerState, ContainerActions>({
  selectedFilters: (state = initialState.selectedFilters, action) => {
    return state;
  },
});
