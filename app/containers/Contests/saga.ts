import ActionTypes from './constants';
import {} from './selectors';
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
  const request: APIGetContestSuggestionsRequest = {
    query: value,
    year: Utils.currentYear(),
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
  // const username = yield select(selectSelectedSearchInput());

  const request: APIGetContestsRequest = {
    filters: [
      {
        id: '',
        name: '',
      },
    ],
    searchInput: '',
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
