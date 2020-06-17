import { SIGNUP_SUCCESS, SIGNUP_ERROR, SIGNIN_SUCCESS, SIGNIN_ERROR, SIGNOUT_SUCCESS, SIGNOUT_ERROR, RESET_AUTH_MESSAGE, EMAIL_NOT_VERIFIED } from '../actions/actionTypes'

const INITIAL_STATE = {
    authMsg: null,
    user: '',
    verified: false
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SIGNUP_SUCCESS:
            return {
                ...state,
                authMsg: action.payload.authMessage,
            }
        case SIGNUP_ERROR:
            return {
                ...state,
                authMsg: action.payload.authMessage
            }
        case SIGNIN_SUCCESS:
            return {
                ...state,
                authMsg: action.payload.authMessage,
                user: action.payload.userMail,
                verified: action.payload.verified
            }
        case SIGNIN_ERROR:
            return {
                ...state,
                authMsg: action.payload.authMessage
            }
        case SIGNOUT_SUCCESS:
            return {
                user: null,
                authMsg: action.payload.authMessage,
                verified: action.payload.verified
            }
        case SIGNOUT_ERROR:
            return {
                ...state,
                authMsg: action.payload.authMessage
            }
        case RESET_AUTH_MESSAGE:
            return {
                ...state,
                authMsg: null
            }
        case EMAIL_NOT_VERIFIED:
            return {
                ...state,
                authMsg: action.payload.authMessage,
                verified: action.payload.verified
            }
        default:
            return state

    }
}