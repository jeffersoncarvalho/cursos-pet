import React, { useState } from 'react'

export default () => {

    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')

    const handleChange = (event) => {
        switch(event.target.name){
            case 'firstName':
                setFirstName(event.target.value)
            break
            case 'lastName':
                setLastName(event.target.value)
            break
            case 'email':
                setEmail(event.target.value)
            break
            default:
                console.log('erro')
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(firstName)
        console.log(lastName)
        console.log(email)
    }


    return (
        <div>
            <h1>Formulário 03</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='firstName'>Nome: </label>
                    <input
                        id='firstName'
                        name='firstName'
                        type='text'
                        value={firstName}
                        onChange={handleChange}
                        className='form-control'
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='lastName'>Sobrenome: </label>
                    <input
                        id='lastName'
                        name='lastName'
                        type='text'
                        value={lastName}
                        onChange={handleChange}
                        className='form-control'
                    />

                </div>
                <div className='form-group'>
                    <label htmlFor='email'>E-mail: </label>
                    <input
                        id='email'
                        name='email'
                        type='email'
                        value={email}
                        onChange={handleChange}
                        className='form-control'
                    />

                </div>
                <div>
                    <button type='submit' className='btn btn-primary'>Submeter</button>
                </div>
            </form>
        </div>
    )

}