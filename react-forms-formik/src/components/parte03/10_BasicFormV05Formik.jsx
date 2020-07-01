import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default () => {
    const formik = useFormik(
        {
            initialValues: {
                firstName: '',
                lastName: '',
                email: ''
            },
            validationSchema: Yup.object(
                {
                    firstName: Yup.string()
                        .max(15, 'Deve ter menos de 15 caracteres')
                        .required('Obrigatório'),
                    lastName: Yup.string()
                        .max(20, 'Deve ter menos de 20 caracteres')
                        .required('Obrigatório'),
                    email: Yup.string()
                        .email('E-mail inválido')
                        .required('Obrigatório')
                }
            ),
            onSubmit: values => {
                console.log(values.firstName)
                console.log(values.lastName)
                console.log(values.email)
            }
        }
    )
    /* USO do formik.getFieldProps */
    return (
        <div>
            <h1>Formulário 10 - Formik</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='firstName'>Nome: </label>
                    <input
                        id='firstName'
                        name='firstName'
                        {...formik.getFieldProps('firstName')} 
                        className={formik.touched.firstName ?
                            (formik.errors.firstName) ? 'form-control is-invalid' : 'form-control is-valid'
                            :
                            'form-control'}
                    />
                    {formik.touched.firstName && formik.errors.firstName ?
                        <div className='invalid-feedback'>{formik.errors.firstName}</div> : null}
                </div>
                <div className='form-group'>
                    <label htmlFor='lastName'>Sobrenome: </label>
                    <input
                        id='lastName'
                        name='lastName'
                        {...formik.getFieldProps('lastName')}
                        className={formik.touched.lastName ?
                            (formik.errors.lastName) ? 'form-control is-invalid' : 'form-control is-valid'
                            :
                            'form-control'}
                    />
                    {formik.touched.lastName && formik.errors.lastName ?
                        <div className='invalid-feedback'>{formik.errors.lastName}</div> : null}
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>E-mail: </label>
                    <input
                        id='email'
                        name='email'
                        {...formik.getFieldProps('email')}
                        className={formik.touched.email ?
                            (formik.errors.email) ? 'form-control is-invalid' : 'form-control is-valid'
                            :
                            'form-control'}
                    />
                    <small id='email' className='form-text text-muted'>Nós nunca compartilharemos o seu e-mail com ninguém.</small>
                    {formik.touched.email && formik.errors.email ?
                        <div className='invalid-feedback'>{formik.errors.email}</div> : null}
                </div>
                <div>
                    <button type='submit' className='btn btn-primary'>Submeter</button>
                </div>
            </form>

        </div>
    )
}