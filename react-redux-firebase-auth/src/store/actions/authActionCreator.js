import { SIGNUP_SUCCESS, SIGNUP_ERROR, SIGNOUT_SUCCESS, SIGNOUT_ERROR, SIGNIN_SUCCESS, SIGNIN_ERROR } from "./actionTypes";
import firebase from '../../utils/firebase'

export const signup = (email, password, callback) => {
    return dispatch => {
        try {
            firebase.auth()
                .createUserWithEmailAndPassword(email, password)
                .then(
                    () => {
                        firebase.auth().onAuthStateChanged(function (user) {
                            if (user) {
                                dispatch({
                                    type: SIGNUP_SUCCESS,
                                    payload: { authMsg: 'Cadastro efetuado com sucesso!', user: user.email }
                                })
                                callback(user)
                            } else {
                                // No user is signed in.
                                dispatch({
                                    type: SIGNUP_ERROR,
                                    payload: { authMsg: 'Não foi possível conectar o usuário. Tente novamente.' }
                                })
                                callback()
                            }
                        })//firebase.auth().onAuthStateChanged

                    }
                )//then
                .catch(
                    (error) => {
                        dispatch({
                            type: SIGNUP_ERROR,
                            payload: { authMsg: `Erro na criação do usuário: ${error}` }
                        })
                        callback()
                    }
                )//catch

        } catch (error) {
            dispatch({
                type: SIGNUP_ERROR,
                payload: { authMsg: `Erro na conexão com o firebase: ${error}` }
            })
            callback()
        }
    }
}

export const signout = (callback) => async dispatch => {
    try {
        firebase.auth()
            .signOut()
            .then(
                () => {

                    dispatch({
                        type: SIGNOUT_SUCCESS,
                        payload: { authMsg: 'Signout efetuado com sucesso.' }
                    })
                    callback()
                }

            )
            .catch(
                (error) => {
                    dispatch({
                        type: SIGNOUT_ERROR,
                        payload: { authMsg: `Erro no signout: ${error}` }
                    })
                    callback()
                }
            )

    } catch (error) {
        dispatch({
            type: SIGNOUT_ERROR,
            payload: { authMsg: `Erro na conexão com o firebase: ${error}` }
        })
        callback()
    }
}

export const signin = (email, password, callback) => async dispatch => {
    try {

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(
                (data) => {
                    dispatch({
                        type: SIGNIN_SUCCESS,
                        payload: { authMsg: 'Signin efetuado com sucesso!', user: data.user.email }
                    })
                    callback(data.user)
                }
            )
            .catch(
                (error) => {
                    dispatch({
                        type: SIGNIN_ERROR,
                        payload: { authMsg: `Erro no processo de signin [${error.code}]: ${error}` }
                    })
                    callback()
                }
            )

    } catch (error) {
        dispatch({
            type: SIGNIN_ERROR,
            payload: { authMsg: `Erro na conexão com o firebase: ${error}` }
        })
        callback()
    }
}