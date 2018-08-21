import { CHANGE_TOPBAR_INDEX } from './constants';

export function changeTopBarIndex(index: number) {
  return {
    type: CHANGE_TOPBAR_INDEX,
    payload: {
      index: index,
    },
  };
}
