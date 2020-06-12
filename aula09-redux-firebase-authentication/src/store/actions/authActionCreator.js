import {SIGNUP_SUCCESS,SIGNUP_ERROR} from './actionTypes'
import firebase from '../../utils/firebase'

export const signup = (email,password) => {
    return dispatch =>{
        try{
            firebase
            .auth()
            .createUserWithEmailAndPassword(email,password)
            .then(
                ()=>{
                    firebase.auth().onAuthStateChanged(
                        (user)=>{
                            if(user){
                                dispatch({
                                    type:SIGNUP_SUCCESS,
                                    payload: {
                                        authMessage: `Cadastro efetuado com sucesso!`,
                                        userMail: user.email}
                                })
                            }else{
                                dispatch({
                                    type:SIGNUP_ERROR,
                                    payload: {authMessage: `Não foi possível conectar`}
                                })
                            }
                        }
                    )//firebase.auth().onAuthStateChanged(
                }//se deu certo
            )
            .catch(
                (error)=>{
                    dispatch({
                        type: SIGNUP_ERROR,
                        payload: {authMessage:`Erro na criação do usuário: ${error}`}
                    })
                }
            )
        }catch(error){
            dispatch({
                type: SIGNUP_ERROR,
                payload: { authMessage: `Erro na conexão com o firebase: ${error}`}
            })
        } //try-catch

    } //return dispatch
}