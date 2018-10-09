import ActionTypes from './constants';
import { selectSelectedSearchInput } from './selectors';
import { setSuggestions, setRankings } from './actions';
import { SearchSuggestion, TableItem } from './types';

import { takeLatest, call, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { apiGetRankings, APIRankingResultsResponse, APIGetRankingResultsRequest } from './api';

// import getRankingResults from 'api/rankings/results';

export function* getRankings() {
  // const username = yield select(selectSelectedSearchInput());

  const request: APIGetRankingResultsRequest = {
    filters: [
      {
        id: '',
        name: '',
      },
    ],
    searchInput: '',
  };
  try {
    const results: APIRankingResultsResponse = yield call(apiGetRankings, request);
    yield put(setRankings(results.items));
  } catch (err) {
    console.log('err: ', err);
    // yield put(repoLoadingError(err));
  }
}
export function* getSuggestions() {
  const username = yield select(selectSelectedSearchInput());
  yield delay(2000);
  try {
    // const repos = yield call(request, requestURL);
    const suggestions: SearchSuggestion[] = [{ name: 'Temp1' }, { name: 'Temp2' }, { name: 'Temp3' }];
    yield put(setSuggestions(suggestions));
  } catch (err) {
    // yield put(repoLoadingError(err));
  }
}

export default function* rankingsSaga() {
  yield takeLatest(ActionTypes.LOAD_SUGGESTIONS, getSuggestions);
  yield takeLatest(ActionTypes.LOAD_RANKINGS, getRankings);
}
