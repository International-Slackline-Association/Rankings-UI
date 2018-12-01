import ActionTypes from './constants';
import { selectSelectedSearchInput } from './selectors';
import { setSuggestions, setTableItems } from './actions';

import { takeLatest, call, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import {
  apiGetRankings,
  APIRankingsResponse,
  APIGetRankingsRequest,
} from './api';
import { SearchSuggestion } from 'containers/GenericTabContent/types';

// import getRankingResults from 'api/rankings/results';

export function* getRankings() {
  // const username = yield select(selectSelectedSearchInput());

  const request: APIGetRankingsRequest = {
    filters: [
      {
        id: '',
        name: '',
      },
    ],
    searchInput: '',
  };
  try {
    const results: APIRankingsResponse = yield call(apiGetRankings, request);
    yield put(setTableItems(results.items));
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
  yield takeLatest(ActionTypes.LOAD_TABLE_ITEMS, getRankings);
}
