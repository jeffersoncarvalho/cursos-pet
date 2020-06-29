import { SIGNUP_SUCCESS, SIGNUP_ERROR, SIGNOUT_SUCCESS, SIGNOUT_ERROR, SIGNIN_SUCCESS, SIGNIN_ERROR, EMAIL_NOT_VERIFIED, RESET_AUTH_MSG } from '../actions/actionTypes'

//estado
const INITIAL_STATE = {
  authMsg: null,
  user: null,
  verified: false
};

export default function (state = INITIAL_STATE, action) {

  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        authMsg: action.payload.authMsg,
        user: action.payload.user,
        verified: action.payload.verified //false
      }
    case SIGNUP_ERROR:
      return {
        ...state,
        authMsg: action.payload.authMsg
      }
    case SIGNOUT_SUCCESS:
      return {
        user: null,
        authMsg: action.payload.authMsg,
        verified: action.payload.verified //false
      }
    case SIGNOUT_ERROR:
      return {
        ...state,
        authMsg: action.payload.authMsg
      }
    case SIGNIN_SUCCESS:
      return {
        ...state,
        authMsg: action.payload.authMsg,
        user: action.payload.user,
        verified: action.payload.verified //true
      }
    case SIGNIN_ERROR:
      return {
        ...state,
        authMsg: action.payload.authMsg
      }
    case EMAIL_NOT_VERIFIED:
      return {
        ...state,
        authMsg: action.payload.authMsg,
        verified: action.payload.verified //false
      }
    case RESET_AUTH_MSG:
      return {
        ...state,
        authMsg: null
      }
    default:
      return state
  }
}