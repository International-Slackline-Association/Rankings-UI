import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import ActionTypes from './constants';
import {} from './selectors';
import * as actions from './actions';
import { delay } from 'redux-saga';
import {
  APIGetAthleteSuggestionsResponse,
  apiGetAthleteSuggestions,
  apiAdminGetAthlete,
  APIAdminGetAthleteResponse,
  APIGetCountrySuggestionsResponse,
  apiGetCountrySuggestions,
} from './api';
import { ISelectOption } from 'types/application';

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
        label: `${item.name} - ${item.email}`,
      };
      return option;
    });
    yield put(actions.setAthleteSuggestions(options));
  } catch (err) {
    console.log('err: ', err);
  }
}

export function* getAthlete(action: ReturnType<typeof actions.loadAthlete>) {
  try {
    const id = action.payload;
    const result: APIAdminGetAthleteResponse = yield call(
      apiAdminGetAthlete,
      id,
    );
    yield put(actions.setAthlete(result.athlete));
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

export default function* adminAthleteSaga() {
  yield takeLatest(ActionTypes.LOAD_ATHLETE_SUGGESTIONS, getAthleteSuggestions);
  yield takeLatest(ActionTypes.LOAD_ATHLETE, getAthlete);
  yield takeLatest(ActionTypes.LOAD_COUNTRY_SUGGESTIONS, getCountrySuggestions);
}
