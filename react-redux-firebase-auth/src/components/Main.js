import React from 'react'
import Card from './Card'

const Main = () => {
    return (
        <Card title='Página Principal'>
            Para criar um usuário no projeto do Firebase, chame o método createUserWithEmailAndPassword ou use
            um provedor de identidade federado, como o Login do Google ou do Facebook, para fazer o login do
            usuário pela primeira vez.
        </Card>
    )
}

export default Main