import ActionTypes from './constants';
import { selectSelectedSearchInput, selectId } from './selectors';
import { setSuggestions, setTableItems, setAthlete } from './actions';

import { takeLatest, call, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { apiGetAthlete, APIGetAthleteRequest, GetAthleteResponse } from './api';
import { SearchSuggestion } from 'containers/GenericTabContent/types';

// import getRankingResults from 'api/rankings/results';

export function* getContest() {
  const id = yield select(selectId());
  const request: APIGetAthleteRequest = {
    id: id,
  };
  try {
    const result: GetAthleteResponse = yield call(apiGetAthlete, request);
    yield put(setTableItems(result.items));
    yield put(setAthlete(result.athlete));
  } catch (err) {
    console.log('err: ', err);
    // yield put(repoLoadingError(err));
  }
}
export function* getSuggestions() {
  const username = yield select(selectSelectedSearchInput());
  yield delay(1000);
  try {
    // const repos = yield call(request, requestURL);
    const suggestions: SearchSuggestion[] = [
      { name: 'Temp 123' },
      { name: 'Temp2' },
      { name: 'Temp3' },
      { name: 'Temp4' },
      { name: 'Temp5' },
      { name: 'Temp5' },
      { name: 'Temp5' },
      { name: 'Temp5' },
    ];
    yield put(setSuggestions(suggestions));
  } catch (err) {
    // yield put(repoLoadingError(err));
  }
}

export default function* rankingsSaga() {
  yield takeLatest(ActionTypes.LOAD_SUGGESTIONS, getSuggestions);
  yield takeLatest(ActionTypes.LOAD_TABLE_ITEMS, getContest);
}
