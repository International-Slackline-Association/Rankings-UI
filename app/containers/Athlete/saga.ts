import ActionTypes from './constants';
import * as actions from './actions';
import { takeLatest, call, put, select } from 'redux-saga/effects';

import {
  apiGetAthlete,
  apiGetAthleteContests,
  APIGetAthleteContestsRequest,
  APIGetAthleteRequest,
  APIGetAthleteResponse,
  apiGetCategories,
  APIAthleteContestsCategoriesResponse,
} from './api';
import * as selectors from './selectors';
import { TableItemsResult, ICategory } from './types';

export function* getAthlete() {
  const id = yield select(selectors.selectId());
  const request: APIGetAthleteRequest = {
    id: id,
  };
  try {
    const result: APIGetAthleteResponse = yield call(apiGetAthlete, request);
    yield put(actions.setAthlete(result.athlete));
  } catch (err) {
    console.log('err: ', err);
  }
}

export function* getCategories() {
  try {
    const results: APIAthleteContestsCategoriesResponse = yield call(
      apiGetCategories,
    );
    yield put(actions.setCategories(results.items));
  } catch (err) {
    console.log('err: ', err);
  }
}

export function* getResults() {
  const id: string = yield select(selectors.selectId());
  const categories: ICategory[] = yield select(selectors.selectCategories());
  const tableItemsResult: TableItemsResult = yield select(
    selectors.selectTableResult(),
  );

  const selectedCategories =
    categories && categories.map(c => parseInt(c.selectedValue, 10));

  const request: APIGetAthleteContestsRequest = {
    id: id,
    selectedCategories: selectedCategories,
    next: tableItemsResult.next,
  };
  try {
    const results: TableItemsResult = yield call(
      apiGetAthleteContests,
      request,
    );
    yield put(actions.addTableItems(results));
  } catch (err) {
    console.log('err: ', err);
  }
}
export default function* athleteSaga() {
  yield takeLatest(ActionTypes.LOAD_ATHLETE, getAthlete);
  yield takeLatest(ActionTypes.LOAD_CATEGORIES, getCategories);
  yield takeLatest(ActionTypes.LOAD_TABLE_ITEMS, getResults);
  yield takeLatest(ActionTypes.LOAD_NEXT_TABLE_ITEMS, getResults);
}
