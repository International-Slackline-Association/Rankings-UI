import { combineReducers } from 'redux';

import ActionTypes from './constants';
import { ContainerState, ContainerActions, TopBarTabsItem } from './types';
import { TopBarTabType, TopBarTabContentType } from 'types/enums';
import { LOCATION_CHANGE } from 'react-router-redux';

export const initialState: ContainerState = {
  items: [
    {
      id: '-2',
      name: 'Rankings',
      type: TopBarTabType.Static,
      contentType: TopBarTabContentType.rankings,
    },

    {
      id: '-1',
      name: 'Contests',
      type: TopBarTabType.Static,
      contentType: TopBarTabContentType.contests,
    },
  ],
  selectedId: '-2',
};

function modifyTabBarItemsByURL(items: TopBarTabsItem[], pathname: string) {
  const [{}, path, id] = pathname.split('/')[1];
  if (!path) {
    return items;
  }
  if (path === TopBarTabContentType.rankings || path === TopBarTabContentType.contests) {
    return items;
  } else if (path === TopBarTabContentType.contest || path === TopBarTabContentType.athlete) {
    if (id) {
      const oldTab = items.find(t => t.id === id);
      if (!oldTab) {
        const sameTypeTab = items.find(t => t.contentType === path);
        if (sameTypeTab) {
          const index = items.indexOf(sameTypeTab);
          const replaceTab = { ...sameTypeTab };
          replaceTab.id = id;
          replaceTab.name = '';
          items[index] = replaceTab;
        } else {
          items.push({ id: id, contentType: TopBarTabContentType[path], type: TopBarTabType.Dynamic, name: '' });
        }
      }
    }
  }
  return items;
}

export default combineReducers<ContainerState, ContainerActions>({
  items: (state = initialState.items, action) => {
    // console.log('State: ', state);
    // console.log('Action: ', action);
    switch (action.type) {
      case LOCATION_CHANGE:
        const items = modifyTabBarItemsByURL([...state], action.payload.pathname);
        return items;
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
