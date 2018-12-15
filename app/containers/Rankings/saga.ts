import ActionTypes from './constants';
import {} from './selectors';
import {
  addTableItems,
  setCategories,
  loadAthleteSuggestions,
  loadCountrySuggestions,
  setAthleteSuggestions,
  setCountrySuggestions,
} from './actions';

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
import { ISelectOption } from 'components/CategoriesFilters/types';

export function* getCategories() {
  try {
    const results: APIRankingCategoriesResponse = yield call(apiGetCategories);
    yield put(setCategories(results.items));
  } catch (err) {
    console.log('err: ', err);
  }
}

export function* getAthleteSuggestions(
  action: ReturnType<typeof loadAthleteSuggestions>,
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
        label: item.name,
      };
      return option;
    });
    yield put(setAthleteSuggestions(options));
  } catch (err) {
    console.log('err: ', err);
  }
}

export function* getCountrySuggestions(
  action: ReturnType<typeof loadCountrySuggestions>,
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
    yield put(setCountrySuggestions(options));
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
    yield put(addTableItems(results));
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
