import ActionTypes from './constants';
import { selectSelectedSearchInput, selectId } from './selectors';
import { setSuggestions, setTableItems, setContest } from './actions';

import { takeLatest, call, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { apiGetContest, APIGetContestRequest, GetContestResponse } from './api';
import { SearchSuggestion } from 'containers/GenericTabContent/types';

// import getRankingResults from 'api/rankings/results';

export function* getContest() {
  const id = yield select(selectId());
  const request: APIGetContestRequest = {
    id: id,
  };
  try {
    const result: GetContestResponse = yield call(apiGetContest, request);
    yield put(setTableItems(result.items));
    yield put(setContest(result.contest));
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
