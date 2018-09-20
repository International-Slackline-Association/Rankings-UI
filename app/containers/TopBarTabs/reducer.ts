import { combineReducers } from 'redux';

import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';
import { TopBarTabType } from 'types/enums';

export const initialState: ContainerState = {
  items: [
    {
      id: '-2',
      name: 'Rankings',
      type: TopBarTabType.Static,
    },

    {
      id: '-1',
      name: 'Contests',
      type: TopBarTabType.Static,
    },

    {
      id: '1',
      name: 'Swiss Slackline Championship',
      type: TopBarTabType.Dynamic,
    },
    {
      id: '2',
      name: 'Can Sahin',
      type: TopBarTabType.Dynamic,
    },
  ],
  selectedId: '-2',
};

export default combineReducers<ContainerState, ContainerActions>({
  items: (state = initialState.items, action) => {
    // console.log('State: ', state);
    // console.log('Action: ', action);
    switch (action.type) {
      case ActionTypes.CHANGE_TOPBAR_INDEX:
        return state;
      case ActionTypes.ADD_TOPBAR_TAB:
        return state.concat(action.payload);
      case ActionTypes.SET_TOPBAR_TABS:
        return action.payload;
      default:
        return state;
    }
  },
  selectedId: (state = initialState.selectedId, action) => {
    switch (action.type) {
      case ActionTypes.CHANGE_TOPBAR_INDEX:
        return action.payload;
      default:
        return state;
    }
  },
});
