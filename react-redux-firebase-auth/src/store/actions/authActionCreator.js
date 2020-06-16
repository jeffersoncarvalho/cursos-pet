import { SIGNUP_SUCCESS, SIGNUP_ERROR, SIGNIN_SUCCESS, SIGNIN_ERROR, SIGNOUT_SUCCESS, SIGNOUT_ERROR, RESET_AUTH_MESSAGE } from './actionTypes'
import firebase from '../../utils/firebase'

export const signup = (email, password, callback) => {
    return dispatch => {
        try {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(
                    () => {
                        firebase.auth().onAuthStateChanged(
                            (user) => {
                                if (user) {
                                    dispatch({
                                        type: SIGNUP_SUCCESS,
                                        payload: {
                                            authMessage: `Cadastro efetuado com sucesso!`,
                                            userMail: user.email
                                        }
                                    })
                                    callback()
                                } else {
                                    dispatch({
                                        type: SIGNUP_ERROR,
                                        payload: { authMessage: `Não foi possível conectar` }
                                    })
                                    callback()
                                }
                            }
                        )//firebase.auth().onAuthStateChanged(
                    }//se deu certo
                )
                .catch(
                    (error) => {
                        dispatch({
                            type: SIGNUP_ERROR,
                            payload: { authMessage: `Erro na criação do usuário: ${error}` }
                        })
                        callback()
                    }
                )
        } catch (error) {
            dispatch({
                type: SIGNUP_ERROR,
                payload: { authMessage: `Erro na conexão com o firebase: ${error}` }
            })
            callback()
        } //try-catch

    } //return dispatch
}

export const signin = (email, password, callback) => {

    return dispatch => {
        try {

            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(
                    (data) => {
                        dispatch({
                            type: SIGNIN_SUCCESS,
                            payload: {
                                authMessage: `Login efetuado com sucesso`,
                                userMail: data.user.email
                            }
                        })
                        callback()
                    }
                )
                .catch(
                    (error) => {
                        dispatch({
                            type: SIGNIN_ERROR,
                            payload: { authMessage: `Erro login do usuário: ${error}` }
                        })
                        callback()
                    }
                )

        } catch (error) {
            dispatch({
                type: SIGNIN_ERROR,
                payload: { authMessage: `Erro na conexão com o firebase: ${error}` }
            })
            callback()
        }
    }

}

export const signout = (callback) => {
    return dispatch => {
        try {
            firebase
                .auth()
                .signOut()
                .then(
                    () => {
                        dispatch({
                            type: SIGNOUT_SUCCESS,
                            payload: { authMessage: `Signout efetuado com sucesso` }
                        })
                        callback()
                    }
                )
                .catch(
                    (error) => {
                        dispatch({
                            type: SIGNOUT_ERROR,
                            payload: { authMessage: `Erro logout: ${error}` }
                        })
                        callback()
                    }
                )

        } catch (error) {
            dispatch({
                type: SIGNOUT_ERROR,
                payload: { authMessage: `Erro na conexão com o firebase: ${error}` }
            })
            callback()
        }
    }
}

export const resetAuthMessage = () => {
    return {
        type: RESET_AUTH_MESSAGE
    }
}