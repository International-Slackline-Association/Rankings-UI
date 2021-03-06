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
import * as selectors from './selectors';
import { APIGetContestResultsRequest } from 'api/contests/contest-results';

export function* getContest() {
  const id = yield select(selectors.selectId());
  const discipline = yield select(selectors.selectDiscipline());
  const request: APIGetContestRequest = {
    id: id,
    discipline: parseInt(discipline, 10),
  };
  try {
    const result: GetContestResponse = yield call(apiGetContest, request);
    yield put(actions.setContest(result.contest));
    yield put(actions.changeTopBarName(id, result.contest.name));
  } catch (err) {
    console.log('err: ', err);
  }
}

export function* getResults() {
  const id = yield select(selectors.selectId());
  const discipline = yield select(selectors.selectDiscipline());
  const tableResult = yield select(selectors.selectTableResult());

  const request: APIGetContestResultsRequest = {
    id: id,
    discipline: parseInt(discipline, 10),
    next: tableResult.next,
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
