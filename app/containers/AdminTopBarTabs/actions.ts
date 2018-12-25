import { action } from 'typesafe-actions';

import ActionTypes from './constants';

export const changeTopBarIndex = (id: string) =>
  action(ActionTypes.CHANGE_TOPBAR_INDEX, id);

