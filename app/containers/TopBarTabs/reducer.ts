import { CHANGE_TOPBAR_INDEX } from './constants';
import { combineReducers } from 'redux-immutable';


function selectedIndexReducer(state = 0, action) {
  switch (action.type) {
    case CHANGE_TOPBAR_INDEX:
      return action.payload.index;
    default:
      return state;
  }
}

export default combineReducers({
  selectedIndex: selectedIndexReducer,
});
