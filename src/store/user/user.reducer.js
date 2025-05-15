import USER_ACTION_TYPES from "./user.types";

export const INITIAL_STATE = {
  currentUser: null,
  tokens: null,
  isLoading: false,
  error: null,
  shouldNavigateHome: false,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
    case USER_ACTION_TYPES.SIGN_UP_SUCCESS:
      return {
        ...state,
        tokens: payload.tokens,
        currentUser: payload.user,
        shouldNavigateHome: true,
        error: null,
      };

    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        tokens: null,
        error: null,
      };
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
    case USER_ACTION_TYPES.SIGN_OUT_FAILED:
    case USER_ACTION_TYPES.SIGN_UP_FAILED:
      return {
        ...state,
        error: payload,
      };
    case USER_ACTION_TYPES.SET_SHOULD_NAVIGATE_HOME:
      return {
        ...state,
        shouldNavigateHome: payload,
      };
    default:
      return state;
  }
};
