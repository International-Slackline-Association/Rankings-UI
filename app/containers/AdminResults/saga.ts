import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import ActionTypes from './constants';
import * as actions from './actions';
import { delay } from 'redux-saga';

import { ISelectOption } from 'types/application';
import {
  APIGetContestSuggestionsResponse,
  apiGetContestSuggestions,
} from 'containers/AdminContest/api';
import {
  APIGetAthleteSuggestionsResponse,
  apiGetAthleteSuggestions,
} from 'containers/AdminAthlete/api';

export function* getContestSuggestions(
  action: ReturnType<typeof actions.loadContestSuggestions>,
) {
  yield call(delay, 500);
  const value = action.payload;
  try {
    const results: APIGetContestSuggestionsResponse = yield call(
      apiGetContestSuggestions,
      value,
    );
    const options = results.items.map(item => {
      const option: ISelectOption = {
        value: `${item.id}:${item.discipline.id}`,
        label: `${item.name} - ${item.discipline.name}`,
      };
      return option;
    });
    yield put(actions.setContestSuggestions(options));
  } catch (err) {
    console.log('err: ', err);
  }
}

export function* getAthleteSuggestions(
  action: ReturnType<typeof actions.loadAthleteSuggestions>,
) {
  yield call(delay, 500);
  const { value, index } = action.payload;
  try {
    const results: APIGetAthleteSuggestionsResponse = yield call(
      apiGetAthleteSuggestions,
      value,
    );
    const options = results.items.map(item => {
      const option: ISelectOption = {
        value: item.id,
        label: `${item.name} ${item.surname} - ${item.email}`,
      };
      return option;
    });
    yield put(actions.setAthleteSuggestions(options, index));
  } catch (err) {
    console.log('err: ', err);
  }
}
export default function* adminResultsSaga() {
  yield takeLatest(ActionTypes.LOAD_CONTEST_SUGGESTIONS, getContestSuggestions);
  yield takeLatest(ActionTypes.LOAD_ATHLETE_SUGGESTIONS, getAthleteSuggestions);
}
