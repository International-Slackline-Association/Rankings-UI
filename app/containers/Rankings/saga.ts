import ActionTypes from './constants';
import { selectSelectedSearchInput } from './selectors';
import { setSuggestions, setRankings } from './actions';
import { SearchSuggestion, TableItem } from './types';

import { takeLatest, call, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

const rankings: TableItem[] = [
  {
    id: '1',
    age: 27,
    country: 'TR',
    name: 'Can Sahin',
    points: '240',
    rank: 1,
  },
  {
    id: '2',
    age: 27,
    country: 'TR',
    name: 'Can Sahin',
    points: '240',
    rank: 1,
  },
  {
    id: '3',
    age: 27,
    country: 'TR',
    name: 'Can Sahin',
    points: '240',
    rank: 1,
  },
  {
    id: '4',
    age: 27,
    country: 'TR',
    name: 'Can Sahin',
    points: '240',
    rank: 1,
  },
  {
    id: '5',
    age: 27,
    country: 'TR',
    name: 'Can Sahin',
    points: '240',
    rank: 1,
  },
];
export function* getRankings() {
  const username = yield select(selectSelectedSearchInput());
  yield delay(2000);

  try {
    // const repos = yield call(request, requestURL);
    yield put(setRankings(rankings));
  } catch (err) {
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
