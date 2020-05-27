import { TopBarTabContentType, TopBarTabType } from 'types/enums';
import { initialState } from './slice';
import { TopBarTabsItem } from './types';
import { startCase } from 'lodash';

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
    const [{}, path, id, discipline, ...rest] = pathname.split('/');
    if (rest.length > 0) {
      return { path: path, id: null };
    }
    if (!id) {
      const staticId = isPathStaticType(path) ? idOfStaticPath(path) : null;
      if (staticId) {
        return { path: path, id: staticId };
      }
    }
    return { path: path, id: id, discipline: discipline };
  }
  return { path: null, id: null };
}

export function changeSelectedIdsName(
  items: TopBarTabsItem[],
  id: string,
  name: string,
) {
  const tabItem = items.find(t => t.id === id);
  if (tabItem) {
    const index = items.indexOf(tabItem);
    const replaceTab = { ...tabItem };
    replaceTab.name = name;
    items[index] = replaceTab;
  }
  return items;
}

export function modifyTabBarItemsByURL(
  items: TopBarTabsItem[],
  pathname: string,
) {
  const { path, id, discipline } = findPathAndId(pathname.toLowerCase());
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
          replaceTab.name =
            path === TopBarTabContentType.contest ? '-' : parseNameFromId(id);
          replaceTab.discipline = startCase(discipline);
          items[index] = replaceTab;
        } else {
          if (path === TopBarTabContentType.contest && !discipline) {
            // there cant be contest without a discipline. Dont add
          } else {
            items.push({
              id: id,
              contentType: TopBarTabContentType[path],
              type: TopBarTabType.Dynamic,
              name:
                path === TopBarTabContentType.contest
                  ? '-'
                  : parseNameFromId(id),
              discipline: startCase(discipline),
            });
          }
        }
      }
    }
  }
  return items;
}
