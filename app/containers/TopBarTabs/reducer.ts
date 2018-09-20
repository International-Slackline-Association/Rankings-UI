import { combineReducers } from 'redux';

import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export enum TopBarTabType {
  Static = 'Static',
  Dynamic = 'Dynamic',
}

const defaultTabs: ContainerState['items'] = [
  {
    id: null,
    isSelected: true,
    name: 'Rankings',
    type: TopBarTabType.Static,
  },

  {
    id: null,
    isSelected: false,
    name: 'Contests',
    type: TopBarTabType.Static,
  },
];

export default combineReducers<ContainerState, ContainerActions>({
  items: (state, action) => {
    // console.log('State: ', state);
    // console.log('Action: ', action);
    switch (action.type) {
      case ActionTypes.CHANGE_TOPBAR_INDEX:
        console.log('ChangeIndex');
        const index = action.payload;
        return state;
      default:
        return defaultTabs;
    }
  },

});
