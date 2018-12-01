import { startCase } from 'lodash';
import { combineReducers } from 'redux';

import ActionTypes from './constants';
import { ContainerState, ContainerActions, TopBarTabsItem } from './types';
import { TopBarTabType, TopBarTabContentType } from 'types/enums';
import { LOCATION_CHANGE } from 'connected-react-router';

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

function isPathStaticType(path: string) {
  return path
    ? path === TopBarTabContentType.rankings ||
        path === TopBarTabContentType.contests
    : false;
}

function idOfStaticPath(path: string) {
  if (
    path === TopBarTabContentType.rankings ||
    path === TopBarTabContentType.contests
  ) {
    const item = initialState.items.find(i => i.contentType === path);
    if (item) {
      return item.id;
    }
  }
  return '';
}

function parseNameFromId(id: string): string {
  // example swiss-open_2018, slackline_2019, can-sahin, can-sahin_2, can, can_2
  const dashedName = id.split('_')[0];
  const name = startCase(dashedName);
  return name;
}

export function findPathAndId(pathname: string) {
  if (pathname) {
    const [{}, path, id] = pathname.split('/');
    if (!id) {
      const staticId = isPathStaticType(path) ? idOfStaticPath(path) : null;
      if (staticId) {
        return { path: path, id: staticId };
      }
    }
    return { path: path, id: id };
  }
  return { path: null, id: null };
}

export function modifyTabBarItemsByURL(
  items: TopBarTabsItem[],
  pathname: string,
) {
  const { path, id } = findPathAndId(pathname);

  if (
    (path && path === TopBarTabContentType.contest) ||
    path === TopBarTabContentType.athlete
  ) {
    if (id) {
      const oldTab = items.find(t => t.id === id);
      if (!oldTab) {
        const sameTypeTab = items.find(t => t.contentType === path);
        if (sameTypeTab) {
          const index = items.indexOf(sameTypeTab);
          const replaceTab = { ...sameTypeTab };
          replaceTab.id = id;
          replaceTab.name = parseNameFromId(id);
          items[index] = replaceTab;
        } else {
          items.push({
            id: id,
            contentType: TopBarTabContentType[path],
            type: TopBarTabType.Dynamic,
            name: parseNameFromId(id),
          });
        }
      }
    }
  }
  return items;
}

export default combineReducers<ContainerState, ContainerActions>({
  items: (state = initialState.items, action) => {
    switch (action.type) {
      case LOCATION_CHANGE:
        const items = modifyTabBarItemsByURL(
          [...state],
          action.payload.location.pathname,
        );
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
      case LOCATION_CHANGE:
        const { path, id } = findPathAndId(action.payload.location.pathname);
        if (id && path != null) {
          return isPathStaticType(path) ? idOfStaticPath(path) : id;
        }
        return id ? id : state;
      case ActionTypes.CHANGE_TOPBAR_INDEX:
        return action.payload;
      default:
        return state;
    }
  },
});
