import React from 'react'
import { useFormik } from 'formik'

export default () => {
    const formik = useFormik(
        {
            initialValues: {
                firstName: '',
                lastName: '',
                email: ''
            },
            onSubmit: values => {
                console.log(values.firstName)
                console.log(values.lastName)
                console.log(values.email)
            }
        }
    )

    return (
        <div>
            <h1>Formulário 06 - Formik</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='firstName'>Nome: </label>
                    <input
                        id='firstName'
                        name='firstName'
                        type='text'
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        className='form-control'
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='lastName'>Sobrenome: </label>
                    <input
                        id='lastName'
                        name='lastName'
                        type='text'
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        className='form-control'
                    />

                </div>
                <div className='form-group'>
                    <label htmlFor='email'>E-mail: </label>
                    <input
                        id='email'
                        name='email'
                        type='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        className='form-control'
                    />
                    <small id='email' className='form-text text-muted'>Nós nunca compartilharemos o seu e-mail com ninguém.</small>
                </div>
                <div>
                    <button type='submit' className='btn btn-primary'>Submeter</button>
                </div>
            </form>

        </div>
    )
}