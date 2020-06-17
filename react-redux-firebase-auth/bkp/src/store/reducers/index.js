import {combineReducers} from 'redux'

import authReducer from './authReducer'
import { firebaseReducer } from 'react-redux-firebase'

/* ESTADO GERAL DA APLICAÇÃO */
export default combineReducers({
    firebaseReducer,
    authReducer
})