import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import ActionTypes from './constants';
import * as actions from './actions';
import { delay } from 'redux-saga';

import { ISelectOption } from 'types/application';
import {
  APIGetContestSuggestionsResponse,
  apiGetContestSuggestions,
  APIGetContestSuggestionsRequest,
} from 'containers/AdminContest/api';
import {
  APIGetAthleteSuggestionsResponse,
  apiGetAthleteSuggestions,
} from 'containers/AdminAthlete/api';
import {
  apiGetContestResults,
  APIAdminGetResultsRequest,
  APIAdminResultsResponse,
} from './api';
import { AthleteFilter } from './types';

export function* getContestSuggestions(
  action: ReturnType<typeof actions.loadContestSuggestions>,
) {
  yield call(delay, 500);
  const value = action.payload;
  const request: APIGetContestSuggestionsRequest = {
    query: value,
    selectedCategories: undefined,
  };
  try {
    const results: APIGetContestSuggestionsResponse = yield call(
      apiGetContestSuggestions,
      request,
    );
    const options = results.items.map(item => {
      const option: ISelectOption = {
        value: `${item.id}:${item.discipline.id}`,
        label: `${item.name} ${item.year} ${item.discipline.name}`,
      };
      return option;
    });
    yield put(actions.setContestSuggestions(options));
  } catch (err) {
    console.log('err: ', err);
  }
}

export function* getAthleteSuggestions(
  action: ReturnType<typeof actions.loadAthleteSuggestions>,
) {
  yield call(delay, 500);
  const { value, index } = action.payload;
  try {
    const results: APIGetAthleteSuggestionsResponse = yield call(
      apiGetAthleteSuggestions,
      value,
    );
    const options = results.items.map(item => {
      const option: ISelectOption = {
        value: item.id,
        label: `${item.name} ${item.surname} - ${item.email}`,
      };
      return option;
    });
    yield put(actions.setAthleteSuggestions(options, index));
  } catch (err) {
    console.log('err: ', err);
  }
}

export function* getResults(action: ReturnType<typeof actions.loadResults>) {
  const { id, discipline } = action.payload;

  const request: APIAdminGetResultsRequest = {
    id: id,
    discipline: discipline,
  };
  try {
    const results: AthleteFilter[] = yield call(apiGetContestResults, request);
    yield put(actions.setResults(results));
  } catch (err) {
    console.log('err: ', err);
  }
}

export default function* adminResultsSaga() {
  yield takeLatest(ActionTypes.LOAD_CONTEST_SUGGESTIONS, getContestSuggestions);
  yield takeLatest(ActionTypes.LOAD_ATHLETE_SUGGESTIONS, getAthleteSuggestions);
  yield takeLatest(ActionTypes.LOAD_RESULTS, getResults);
}
