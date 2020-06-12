import {SIGNUP_SUCCESS,SIGNUP_ERROR} from '../actions/actionTypes'

const INITIAL_STATE = {
    authMsg: null,
    user:null
}

export default function (state = INITIAL_STATE,action){

    switch(action.type){
        case SIGNUP_SUCCESS:
            return {
                ...state,
                authMsg: action.payload.authMessage,
                user: action.payload.userMail,
            }
        case SIGNUP_ERROR:
            return {
                ...state,
                authMsg: action.payload.authMessage
            }
        default:
            return state

    }
}