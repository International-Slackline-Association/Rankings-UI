import { action } from 'typesafe-actions';
import { TopBarTabsItem } from './types';

import ActionTypes from './constants';

export const changeTopBarIndex = (index: number) => action(ActionTypes.CHANGE_TOPBAR_INDEX, index);
export const addTopBarTab = (item: TopBarTabsItem) => action(ActionTypes.ADD_TOPBAR_TAB, item);
export const setTopBarTabs = (items: TopBarTabsItem[]) => action(ActionTypes.ADD_TOPBAR_TAB, items);
