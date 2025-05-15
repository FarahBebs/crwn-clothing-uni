import { call, put, takeLatest, all } from "redux-saga/effects";
import USER_ACTION_TYPES from "./user.types";
import { signInWithEmail, getCurrentUser, signOutUser, signUp as signUpWithEmail } from "../network/user";
import { signInFailed, signInSuccess, signOutFailed, signOutSuccess, signUpFailed, signUpSuccess } from "./user.action";
import { store } from "../store";

export function* setTokensAndGetCurrentUserProfile(tokens, action) {
  try {
    const func = action === 'signIn' ? signInSuccess : signUpSuccess;
    const user = yield call(
      getCurrentUser,
      tokens.token
    );
    yield put(func(tokens, user));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInStart({ payload: { email, password } }) {
  try {
    const tokens = yield call(
      signInWithEmail,
      email,
      password
    );
    yield call(setTokensAndGetCurrentUserProfile, tokens, 'signIn');
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const tokens = yield call(
      signUpWithEmail,
      email,
      password,
      displayName
    );
    yield call(setTokensAndGetCurrentUserProfile, tokens, 'signUp');
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    yield call(getCurrentUser);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signOut() {
  try {
    if (store.getState().user.tokens?.token) {
      yield call(signOutUser);
    }
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutSuccess());
    yield put(signOutFailed(error));
  }
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* OnSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_IN_START, signInStart);
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(OnSignInStart),
    call(onSignUpStart),
    call(onSignOutStart),
  ]);
}
