import { action } from 'typesafe-actions';
import { TopBarTabsItem } from './types';

import ActionTypes from './constants';

export const changeTopBarIndex = (id: string) => action(ActionTypes.CHANGE_TOPBAR_INDEX, id);
export const addTopBarTab = (item: TopBarTabsItem) => action(ActionTypes.ADD_TOPBAR_TAB, item);
export const setTopBarTabs = (items: TopBarTabsItem[]) => action(ActionTypes.SET_TOPBAR_TABS, items);
