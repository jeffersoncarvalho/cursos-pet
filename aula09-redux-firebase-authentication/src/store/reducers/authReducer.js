
const INITIAL_STATE = {
    authMsg: null,
    user:null
}

export default function (state = INITIAL_STATE,action){
    return {
        ...state,
        authMsg: 'Usuário logado com sucesso',
        user:'paulo@uol.com.br'
    }
}