import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import ActionTypes from './constants';
import * as actions from './actions';
import { delay } from 'redux-saga';
import {
  APIGetContestSuggestionsResponse,
  apiGetContestSuggestions,
  apiAdminGetContest,
  APIAdminGetContestResponse,
  APIGetCountrySuggestionsResponse,
  apiGetCountrySuggestions,
  apiGetDisciplines,
  APIAdminGetDisciplinesResponse,
  apiGetCategories,
  APIAdminGetCategoriesResponse,
} from './api';
import { ISelectOption } from 'types/application';

export function* getContestSuggestions(
  action: ReturnType<typeof actions.loadContestSuggestions>,
) {
  yield call(delay, 500);
  const value = action.payload;
  try {
    const results: APIGetContestSuggestionsResponse = yield call(
      apiGetContestSuggestions,
      value,
    );
    const options = results.items.map(item => {
      const option: ISelectOption = {
        value: `${item.id}:${item.discipline.id}`,
        label: `${item.name} - ${item.discipline}`,
      };
      return option;
    });
    yield put(actions.setContestSuggestions(options));
  } catch (err) {
    console.log('err: ', err);
  }
}

export function* getContest(action: ReturnType<typeof actions.loadContest>) {
  try {
    const { id, discipline } = action.payload;
    const result: APIAdminGetContestResponse = yield call(
      apiAdminGetContest,
      id,
      discipline,
    );
    yield put(actions.setContest(result.contest));
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

export function* getDisciplines() {
  try {
    const result: APIAdminGetDisciplinesResponse = yield call(
      apiGetDisciplines,
    );
    yield put(actions.setDisciplines(result.disciplines));
  } catch (err) {
    console.log('err: ', err);
  }
}

export function* getContestCategories() {
  try {
    const result: APIAdminGetCategoriesResponse = yield call(
      apiGetCategories,
    );
    yield put(actions.setContestCategories(result.categories));
  } catch (err) {
    console.log('err: ', err);
  }
}

export default function* adminAthleteSaga() {
  yield takeLatest(ActionTypes.LOAD_CONTEST_SUGGESTIONS, getContestSuggestions);
  yield takeLatest(ActionTypes.LOAD_CONTEST, getContest);
  yield takeLatest(ActionTypes.LOAD_COUNTRY_SUGGESTIONS, getCountrySuggestions);
  yield takeLatest(ActionTypes.LOAD_DISCIPLINES, getDisciplines);
  yield takeLatest(ActionTypes.LOAD_CATEGORIES, getContestCategories);

}
