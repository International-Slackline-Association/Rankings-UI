import ActionTypes from './constants';
import * as selectors from './selectors';
import * as actions from './actions';

import { takeLatest, call, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import {
  apiGetContestSuggestions,
  apiGetDisciplineCategories,
  APIGetContestsRequest,
  apiGetContests,
  APIGetContestSuggestionsRequest,
  APIGetContestSuggestionsResponse,
  APIGetContestsResponse,
} from './api';
import { APIContestsDisciplineCategoriesResponse } from 'api/contests/discipline-categories';
import { ISelectOption } from 'types/application';
import { Utils } from 'utils';
import { TableItemsResult, ICategory, IFilter } from './types';

function* selectCategories() {
  const categories: ICategory[] | null = yield select(selectors.selectCategories());
  const selectedCategories =
    categories && categories.map(c => parseInt(c.selectedValue, 10));
  return selectedCategories;
}

export function* getCategories() {
  try {
    const results: APIContestsDisciplineCategoriesResponse = yield call(
      apiGetDisciplineCategories,
    );
    yield put(actions.setCategories(results.items));
  } catch (err) {
    console.log('err: ', err);
  }
}

export function* getContestSuggestions(
  action: ReturnType<typeof actions.loadContestSuggestions>,
) {
  yield call(delay, 500);
  const value = action.payload;
  const categories: number[] = yield selectCategories();

  const request: APIGetContestSuggestionsRequest = {
    query: value,
    selectedCategories: categories,
  };
  try {
    const results: APIGetContestSuggestionsResponse = yield call(
      apiGetContestSuggestions,
      request,
    );
    const options = results.items.map(item => {
      const option: ISelectOption = {
        value: item.name,
        label: item.name,
      };
      return option;
    });
    yield put(actions.setContestSuggestions(options));
  } catch (err) {
    console.log('err: ', err);
  }
}

export function* getContests() {
  const contestFilter: IFilter = yield select(selectors.selectContestFilter());
  const contestId =
    contestFilter.selectedValue && contestFilter.selectedValue.value;
  const tableItemsResult: TableItemsResult = yield select(
    selectors.selectTableResult(),
  );
  const categories: number[] = yield selectCategories();

  const request: APIGetContestsRequest = {
    selectedCategories: categories,
    contestId: contestId,
    next: tableItemsResult.next,
  };
  try {
    const results: APIGetContestsResponse = yield call(apiGetContests, request);
    yield put(actions.addTableItems(results));
  } catch (err) {
    console.log('err: ', err);
  }
}

export default function* contestsSaga() {
  yield takeLatest(ActionTypes.LOAD_CATEGORIES, getCategories);
  yield takeLatest(ActionTypes.LOAD_CONTEST_SUGGESTIONS, getContestSuggestions);
  yield takeLatest(ActionTypes.LOAD_TABLE_ITEMS, getContests);
  yield takeLatest(ActionTypes.LOAD_NEXT_TABLE_ITEMS, getContests);
}
