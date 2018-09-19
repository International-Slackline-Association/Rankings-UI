import { combineReducers } from 'redux-immutable';
import { ActionType, getType } from 'typesafe-actions';
import * as actions from './actions';
import ActionTypes, * as constants from './constants';

export interface TopBarTabsState {
  selectedIndex: number;
}

export type TopBarTabsActions = ActionType<typeof actions>;



export default combineReducers<TopBarTabsState, TopBarTabsActions>({
  selectedIndex: (state = 0, action) => {
    console.log('State: ', state);
    console.log('Action: ', action);
    switch (action.type) {
      case ActionTypes.CHANGE_TOPBAR_INDEX:
        return action.payload;
      default:
        return state;
    }
  },
});
