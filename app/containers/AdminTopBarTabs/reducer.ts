import { combineReducers } from 'redux';

import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';
import { LOCATION_CHANGE } from 'connected-react-router';

export const initialState: ContainerState = {
  selectedId: 'athlete',
};

export function findPathAndId(pathname: string) {
  if (pathname) {
    const [{}, path, id, ...rest] = pathname.split('/');
    if (rest.length > 0) {
      return { path: path, id: null };
    }
    return { path: path, id: id };
  }
  return { path: null, id: null };
}

export default combineReducers<ContainerState, ContainerActions>({
  selectedId: (state = initialState.selectedId, action) => {
    switch (action.type) {
      case LOCATION_CHANGE:
        const { path, id } = findPathAndId(action.payload.location.pathname);
        console.log(path , id);
        if (id && path != null) {
          return id;
        } else if (path) {
          return '';
        }
        return state;
      case ActionTypes.CHANGE_TOPBAR_INDEX:
        return action.payload;
      default:
        return state;
    }
  },
});
