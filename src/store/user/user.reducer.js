import { USER_ACTION_TYPES as types } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  isLoadingLogin: false,
  userInfo: [],
  errorLogin: {},
  isLoadingRegister: false,
  errorRegister: {},
};

export const userLoginReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case types.USER_LOGIN_REQUEST:
      return {
        ...state,
        isLoadingLogin: true,
      };
    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoadingLogin: false,
        userInfo: payload,
      };
    case types.USER_LOGIN_FAILED:
      return {
        ...state,
        isLoadingLogin: false,
        errorLogin: payload,
      };
    case types.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case types.USER_REGISTER_REQUEST:
      return {
        ...state,
        isLoadingRegister: true,
      };
    case types.USER_REGISTER_SUCCESS:
      return {
        ...state,
        isLoadingRegister: false,
        userInfo: [],
      };
    case types.USER_REGISTER_FAILED: 
      return {
          ...state,
          isLoadingRegister: false,
          errorRegister: payload
      }
    default:
      return state;
  }
};
