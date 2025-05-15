import { createAction } from "../../utils/reducer/reducer";
import USER_ACTION_TYPES from "./user.types";
export const setCurrentUser = (user) => {
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};

export const checkUserSession = () =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const signInStart = (email, password) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_START, { email, password });

export const signInSuccess = (tokens, user) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, {
    tokens,
    user
  });

export const signInFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

export const signUpStart = (email, password, displayName) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  });

export const signUpSuccess = (tokens, user) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {
    tokens,
    user,
  });

export const signUpFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);

export const signOutStart = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_START);

export const signOutSuccess = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

export const signOutFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);
