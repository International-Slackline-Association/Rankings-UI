import ActionTypes from './constants';
import {} from './selectors';
import * as actions from './actions';

import { takeLatest, call, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import {
  apiGetRankings,
  APIRankingsResponse,
  APIGetRankingsRequest,
  apiGetCategories,
  APIRankingCategoriesResponse,
  apiGetAthleteSuggestions,
  APIGetAthleteSuggestionsResponse,
  APIGetCountrySuggestionsResponse,
  apiGetCountrySuggestions,
} from './api';
import { ISelectOption } from 'types/application';

export function* getCategories() {
  try {
    const results: APIRankingCategoriesResponse = yield call(apiGetCategories);
    yield put(actions.setCategories(results.items));
  } catch (err) {
    console.log('err: ', err);
  }
}

export function* getAthleteSuggestions(
  action: ReturnType<typeof actions.loadAthleteSuggestions>,
) {
  yield call(delay, 500);
  const value = action.payload;
  try {
    const results: APIGetAthleteSuggestionsResponse = yield call(
      apiGetAthleteSuggestions,
      value,
    );
    const options = results.items.map(item => {
      const option: ISelectOption = {
        value: item.name,
        label: `${item.name} ${item.surname}`,
      };
      return option;
    });
    yield put(actions.setAthleteSuggestions(options));
  } catch (err) {
    console.log('err: ', err);
  }
}

export function* getCountrySuggestions(
  action: ReturnType<typeof actions.loadCountrySuggestions>,
) {
  yield call(delay, 500);
  const value = action.payload;
  try {
    const results: APIGetCountrySuggestionsResponse = yield call(
      apiGetCountrySuggestions,
      value,
    );
    const options = results.items.map(item => {
      const option: ISelectOption = {
        value: item.code,
        label: `${item.code} - (${item.name})`,
      };
      return option;
    });
    yield put(actions.setCountrySuggestions(options));
  } catch (err) {
    console.log('err: ', err);
  }
}

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
    yield put(actions.addTableItems(results));
  } catch (err) {
    console.log('err: ', err);
  }
}

export default function* rankingsSaga() {
  yield takeLatest(ActionTypes.LOAD_CATEGORIES, getCategories);
  yield takeLatest(ActionTypes.LOAD_ATHLETE_SUGGESTIONS, getAthleteSuggestions);
  yield takeLatest(ActionTypes.LOAD_COUNTRY_SUGGESTIONS, getCountrySuggestions);
  yield takeLatest(ActionTypes.LOAD_TABLE_ITEMS, getRankings);
  yield takeLatest(ActionTypes.LOAD_NEXT_TABLE_ITEMS, getRankings);
}
