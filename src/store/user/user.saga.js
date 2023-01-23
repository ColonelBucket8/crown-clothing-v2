import { takeLatest, put, all, call } from 'redux-saga/effects';
import { USER_ACTION_TYPES } from './user.types';
import { signInSuccess, signInFailed } from './user.action';
import {
  getCurrentUser,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    );
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (e) {
    yield put(signInFailed(e));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;

    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (e) {
    yield put(signInFailed(e));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSaga() {
  yield all([onCheckUserSession]);
}
