import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

export default () => {

    return (
        <Formik

            initialValues={
                {
                    firstName: '',
                    lastName: '',
                    email: '',
                    colors: '',
                    bigText: ''
                }
            }

            validationSchema={
                Yup.object(
                    {
                        firstName: Yup.string()
                            .max(15, 'Deve ter menos de 15 caracteres')
                            .required('Obrigatório'),
                        lastName: Yup.string()
                            .max(20, 'Deve ter menos de 20 caracteres')
                            .required('Obrigatório'),
                        email: Yup.string()
                            .email('E-mail inválido')
                            .required('Obrigatório'),
                        bigText: Yup.string()
                            .max(50, 'Deve ter menos de 50 caracteres')
                            .required('Obrigatório')
                    }
                )
            }

            onSubmit={
                values => {
                    console.log(values.firstName)
                    console.log(values.lastName)
                    console.log(values.email)
                    console.log(values.colors)
                    console.log(values.bigText)
                }
            }
        >
            {
                formik => (
                    <div>
                        <h1>Formulário 12 - Formik</h1>
                        <Form>
                            <div className='form-group'>
                                <label htmlFor='firstName'>Nome: </label>
                                <Field
                                    id='firstName'
                                    name='firstName'
                                    type='text'
                                    className={formik.touched.firstName ?
                                        (formik.errors.firstName) ? 'form-control is-invalid' : 'form-control is-valid'
                                        :
                                        'form-control'}
                                />
                                <div className='invalid-feedback'>
                                    <ErrorMessage name='firstName' />
                                </div>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='lastName'>Sobrenome: </label>
                                <Field
                                    id='lastName'
                                    name='lastName'
                                    type='text'
                                    className={formik.touched.lastName ?
                                        (formik.errors.lastName) ? 'form-control is-invalid' : 'form-control is-valid'
                                        :
                                        'form-control'}
                                />
                                <div className='invalid-feedback'>
                                    <ErrorMessage name='lastName' />
                                </div>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='email'>E-mail: </label>
                                <Field
                                    id='email'
                                    name='email'
                                    type='email'
                                    className={formik.touched.email ?
                                        (formik.errors.email) ? 'form-control is-invalid' : 'form-control is-valid'
                                        :
                                        'form-control'}
                                />
                                <small id='email' className='form-text text-muted'>Nós nunca compartilharemos o seu e-mail com ninguém.</small>
                                <div className='invalid-feedback'>
                                    <ErrorMessage name='email' />
                                </div>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='colors'>Colors: </label>
                                <Field name='colors' id='colors' as='select'
                                    className='custom-select'
                                >
                                    <option vlaue='red'>Red</option>
                                    <option vlaue='green'>Green</option>
                                    <option vlaue='blue'>Blue</option>
                                </Field>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='bigText'>Comments: </label>
                                <Field
                                    name='bigText' id='bigText' as='textarea'
                                    className={formik.touched.bigText ?
                                        (formik.errors.bigText) ? 'form-control is-invalid' : 'form-control is-valid'
                                        :
                                        'form-control'}
                                />
                                <div className='invalid-feedback'>
                                    <ErrorMessage name='bigText' />
                                </div>
                            </div>
                            <div>
                                <button type='submit' className='btn btn-primary'>Submeter</button>
                            </div>
                        </Form>
                    </div>

                )
            }

        </Formik>
    )



}