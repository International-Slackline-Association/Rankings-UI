import ActionTypes from './constants';
import * as actions from './actions';
import { takeLatest, call, put, select } from 'redux-saga/effects';
import signin from 'api/amplify/signin';
import { replace } from 'connected-react-router';
import cognitoUser from 'api/amplify/user';

export function* login(action: ReturnType<typeof actions.login>) {
  const email = action.payload.email;
  const password = action.payload.password;

  try {
    const result: { username: string } = yield call(signin, email, password);
    console.log('Login ', result);
    yield put(actions.loginSuccess());
    yield put(replace('/admin/athlete'));
  } catch (err) {
    console.log('err: ', err);
    yield put(actions.loginError(err));
  }
}

export function* checkUser() {
  try {
    const result = yield call(cognitoUser);
    if (result) {
      yield put(actions.loginSuccess());
      yield put(replace('/admin/athlete'));
    }
  } catch (err) {
    yield put(actions.loginError(err));
  }
}
export default function* adminLoginSaga() {
  yield takeLatest(ActionTypes.LOGIN, login);
  yield takeLatest(ActionTypes.CHECK_USER, checkUser);
}
