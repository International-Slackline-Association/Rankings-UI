import { action } from 'typesafe-actions';

import ActionTypes from './constants';

export const changeTopBarIndex = (index: number) => action(ActionTypes.CHANGE_TOPBAR_INDEX, index);
export const getSampleData = () => action(ActionTypes.GET_SAMPLE_DATA);
export const changeSampleData = data => action(ActionTypes.CHANGE_SAMPLE_DATA, data);
