import { combineReducers } from "redux"

import authReducer from "./authReducer"
import { firebaseReducer } from "react-redux-firebase"

export default combineReducers({
    firebaseReducer,
    authReducer
});