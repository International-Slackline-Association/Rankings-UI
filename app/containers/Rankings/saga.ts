import ActionTypes from './constants';
import * as selectors from './selectors';
import * as actions from './actions';

import { takeLatest, call, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import {
  apiGetRankings,
  APIRankingsResponse,
  APIGetRankingsRequest,
  apiGetCategories,
  APIRankingCategoriesResponse,
  APIRankingCategoriesRequest,
  apiGetAthleteSuggestions,
  APIGetAthleteSuggestionsResponse,
  APIGetCountrySuggestionsResponse,
  apiGetCountrySuggestions,
} from './api';
import { ISelectOption } from 'types/application';
import { ICategory, IFilter, TableItemsResult } from './types';

export function* getCategories(
  action: ReturnType<typeof actions.loadCategories>,
) {
  try {
    const preSelected = action.payload;
    let categories: number[] = yield selectCategories();
    if (!categories && preSelected) {
      categories = preSelected.map(s => parseInt(s, 10));
    }
    const request: APIRankingCategoriesRequest = {
      selectedCategories: categories,
    };
    const results: APIRankingCategoriesResponse = yield call(
      apiGetCategories,
      request,
    );
    if (preSelected && preSelected.length > 0) {
      results.items.map((category, index) => {
        category.selectedValue = categories[index].toString();
      });
    }
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
        value: item.id,
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
  const athleteFilter: IFilter = yield select(selectors.selectAthleteFilter());
  const countryFilter: IFilter = yield select(selectors.selectCountryFilter());

  const athleteId =
    athleteFilter.selectedValue && athleteFilter.selectedValue.value;
  const country =
    countryFilter.selectedValue && countryFilter.selectedValue.value;

  const tableItemsResult: TableItemsResult = yield select(
    selectors.selectTableResult(),
  );
  const categories: number[] = yield selectCategories();
  const request: APIGetRankingsRequest = {
    selectedCategories: categories,
    athleteId: athleteId,
    country: country,
    next: tableItemsResult.next,
  };
  try {
    const results: APIRankingsResponse = yield call(apiGetRankings, request);
    yield put(actions.addTableItems(results));
  } catch (err) {
    console.log('err: ', err);
  }
}

function* selectCategories() {
  const categories: ICategory[] | null = yield select(
    selectors.selectCategories(),
  );
  const selectedCategories =
    categories && categories.map(c => parseInt(c.selectedValue, 10));
  return selectedCategories;
}

export default function* rankingsSaga() {
  yield takeLatest(ActionTypes.LOAD_CATEGORIES, getCategories);
  yield takeLatest(ActionTypes.LOAD_ATHLETE_SUGGESTIONS, getAthleteSuggestions);
  yield takeLatest(ActionTypes.LOAD_COUNTRY_SUGGESTIONS, getCountrySuggestions);
  yield takeLatest(ActionTypes.LOAD_TABLE_ITEMS, getRankings);
  yield takeLatest(ActionTypes.LOAD_NEXT_TABLE_ITEMS, getRankings);
}
