import { takeLatest, call, put, select } from 'redux-saga/effects';
import ActionTypes from './constants';
import { changeSampleData } from './actions';

import request from 'utils/request';
import { makeSelectIndex } from './selectors';

export function* getSampleData() {
  // TODO: fix return value
  const index = yield select(makeSelectIndex());
  const requestURL = `https://jsonplaceholder.typicode.com/todos/${index}`;

  // Call our request helper (see 'app/utils/request')
  const res = yield call(request, requestURL);

  console.log('Res: ', res);
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* sagas(): IterableIterator<any> {
  yield takeLatest(ActionTypes.GET_SAMPLE_DATA, getSampleData);
}
