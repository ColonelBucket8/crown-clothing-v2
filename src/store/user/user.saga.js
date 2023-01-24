import { takeLatest, put, all, call } from 'redux-saga/effects';
import { USER_ACTION_TYPES } from './user.types';
import {
  signInSuccess,
  signInFailed,
  signUpSuccess,
  signUpFailed,
  signOutSuccess,
} from './user.action';
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser,
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

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user);
  } catch (e) {
    yield put(signInFailed(e));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signInWithEmail({ payload }) {
  const { email, password } = payload;
  try {
    const { user } = yield call(
      signInAuthWithEmailAndPassword,
      email,
      password
    );
    yield call(getSnapshotFromUserAuth, user);
  } catch (e) {
    yield put(signInFailed(e));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* signUpWithEmail({ payload }) {
  const { email, password, displayName } = payload;

  try {
    const { user } = yield call([
      createAuthUserWithEmailAndPassword,
      email,
      password,
    ]);

    yield put(signUpSuccess(user, { displayName }));
  } catch (e) {
    yield put(signUpFailed(e));
  }
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUpWithEmail);
}

export function* signInAfterSignUp({ payload }) {
  const { user, additionalDetails } = payload;
  yield call(getSnapshotFromUserAuth, user, additionalDetails);
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_IN_SUCCESS, signInAfterSignUp);
}

export function* signOut() {
  try {
    yield call(signOutUser);

    yield put(signOutSuccess());
  } catch (e) {
    yield put(signUpFailed(e));
  }
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
