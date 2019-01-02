import ActionTypes from './constants';
import * as actions from './actions';
import { takeLatest, call, put, select } from 'redux-saga/effects';

import {
  apiGetContest,
  APIGetContestRequest,
  GetContestResponse,
  apiGetContestResults,
  APIContestResultsResponse,
} from './api';
import { selectId } from './selectors';
import { APIGetContestResultsRequest } from 'api/contests/contest-results';

export function* getContest() {
  const id = yield select(selectId());
  const request: APIGetContestRequest = {
    id: id,
    discipline: 0,
  };
  try {
    const result: GetContestResponse = yield call(apiGetContest, request);
    yield put(actions.setContest(result.contest));
  } catch (err) {
    console.log('err: ', err);
  }
}

export function* getResults() {
  const id = yield select(selectId());
  const request: APIGetContestResultsRequest = {
    id: id,
    discipline: 0,
  };
  try {
    const results: APIContestResultsResponse = yield call(
      apiGetContestResults,
      request,
    );
    yield put(actions.addTableItems(results));
  } catch (err) {
    console.log('err: ', err);
  }
}
export default function* contestSaga() {
  yield takeLatest(ActionTypes.LOAD_CONTEST, getContest);
  yield takeLatest(ActionTypes.LOAD_TABLE_ITEMS, getResults);
  yield takeLatest(ActionTypes.LOAD_NEXT_TABLE_ITEMS, getResults);
}
