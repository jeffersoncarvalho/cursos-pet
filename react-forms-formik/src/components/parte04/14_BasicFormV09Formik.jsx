import React from 'react'
import { Formik, Form, useField } from 'formik'
import * as Yup from 'yup'

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <div className='form-group'>
            <label htmlFor={props.id}>{label}</label>
            <input
                {...props}
                {...field} //onChange, onBlur e value
                className={meta.touched ?
                    (meta.error) ? 'form-control is-invalid' : 'form-control is-valid'
                    :
                    'form-control'}
            />
            {meta.touched && meta.error ?
                <div className='invalid-feedback'>{meta.error}</div> : null}

        </div>
    )
}

const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <div className='form-group'>
            <label htmlFor={props.id}>{label}</label>
            <select
                {...props}
                {...field} //onChange, onBlur e value
                className={meta.touched ?
                    (meta.error) ? 'custom-select is-invalid' : 'custom-select is-valid'
                    :
                    'custom-select'}
            />
            {meta.touched && meta.error ?
                <div className='invalid-feedback'>{meta.error}</div> : null}
        </div>
    )
}

const MyRadioGroup = (props) => {
    //{name:'lang',id:'java',value='java',label:'Java'}
    const radiosJSX = props.radios.map(
        (myRadio,i)=>{
            return(
                <MyRadio name={myRadio.name} id={myRadio.id} value={myRadio.value} key={i}>
                    {myRadio.label}
                </MyRadio>
            )//JSX dos MyRadios
        }
    )//map

    return (
        <div className='form-group'>
            {props.label}
            {radiosJSX}
        </div>
    )

}

const MyRadio = ({children,...props}) => {
    const [field,] = useField({ ...props, type: 'radio' })
    return(
        <div className='form-check'>
            <input type='radio'
            {...props}
            {...field} //onChange, onBlur e value
            className='form-check-input'/>
            <label className='form-check-label' htmlFor={props.id}>
                {children}
            </label>
        </div>
    )
}

const MyTextArea = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <div className='form-group'>
            <label htmlFor={props.id}>{label}</label>
            <textarea
                {...props}
                {...field} //onChange, onBlur e value
                className={meta.touched ?
                    (meta.error) ? 'form-control is-invalid' : 'form-control is-valid'
                    :
                    'form-control'}
            />
            {meta.touched && meta.error ?
                <div className='invalid-feedback'>{meta.error}</div> : null}
        </div>
    )
}

const MyCheckBox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' })
    return (
        <div className='form-group'>
            <div className='custom-control'>
                <input type='checkbox'
                    {...props}
                    {...field}
                    className={meta.touched ?
                        (meta.error) ? 'custom-control-input is-invalid' : 'custom-control-input is-valid'
                        :
                        'custom-control-input'}
                />
                <label className='custom-control-label' htmlFor={props.id}>
                    {children}
                </label>
                {meta.touched && meta.error ?
                    <div className='invalid-feedback'>{meta.error}</div> : null}
            </div>
        </div>
    )
}

export default () => {

    return (
        <Formik

            initialValues={
                {
                    firstName: '',
                    lastName: '',
                    email: '',
                    job: '', //select
                    lang: 'java', //radio
                    comment: '', //text area
                    agree: false //checkbox
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
                        job: Yup.string()
                            .oneOf(
                                ['designer', 'developer', 'architect', 'other'],
                                'Tipo de emprego inválido'
                            )
                            .required('Obrigatório'),
                        comment: Yup.string()
                            .max(50, 'Deve ter menos de 50 caracteres')
                            .required('Obrigatório'),
                        agree: Yup.boolean()
                            .required('Obrigatório')
                            .oneOf([true], 'Você deve aceitar os termos e condições.'),
                        lang: Yup.string()
                            .required('Obrigatório')
                    }
                )
            }

            onSubmit={

                (values, { setSubmitting }) => {
                    //console.log('Teste')
                    setTimeout(
                        () => {
                            console.log(values.firstName)
                            console.log(values.lastName)
                            console.log(values.email)
                            console.log(values.job)
                            console.log(values.lang)
                            console.log(values.comment)
                            console.log(values.agree)
                            setSubmitting(false)

                        },
                        200
                    )
                }
            }
        >
            {
                props => (
                    <div>
                        <h1>Formulário 14 - Formik</h1>
                        <Form>
                            <div>
                                <MyTextInput
                                    label='Nome'
                                    name='firstName'
                                    id='firstName'
                                    type='text'
                                    placeholder='Seu primeiro nome aqui'
                                />
                            </div>
                            <div>
                                <MyTextInput
                                    label='Sobrenome'
                                    name='lastName'
                                    id='lastName'
                                    type='text'
                                    placeholder='Seu sobrenome nome aqui'
                                />
                            </div>
                            <div>
                                <MyTextInput
                                    label='E-mail'
                                    name='email'
                                    id='email'
                                    type='email'
                                    placeholder='exemplo@dominio.com.br'
                                />
                            </div>
                            <div>
                                <MySelect label='Tipo de Emprego' name='job' id='job'>
                                    <option value=''>Selecione um emprego</option>
                                    <option value='designer'>Designer</option>
                                    <option value='developer'>Desenvolvedor</option>
                                    <option value='architect'>Arquiteto</option>
                                    <option value='other'>Outro</option>
                                </MySelect>
                            </div>
                            <div>
                                <MyRadioGroup 
                                    label='Selecione a sua linguagem predileta'
                                    radios={
                                        [
                                            {name:'lang',id:'java',value:'java',label:'Java'},
                                            {name:'lang',id:'cplusplus',value:'cplusplus',label:'C++'},
                                            {name:'lang',id:'python',value:'python',label:'Python'}
                                        ]
                                    }
                                />
                            </div>
                            <div>
                                <MyTextArea
                                    label='Comentários'
                                    name='comment'
                                    id='comment'
                                    placeholder='Comente aqui...'
                                />
                            </div>
                            <div>
                                <MyCheckBox name='agree' id='agree'>
                                    Eu aceito os termos e condições.
                                </MyCheckBox>
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