import React, {Component} from 'react'

export default class BasicFormPlainClassSet extends Component {
    constructor(props){
        super(props)

        this.state = {firstName:'',lastName:'',email:''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    setFirstName(firstName){
        this.setState({firstName})
    }
    setLastName(lastName){
        this.setState({lastName})
    }
    setEmail(email){
        this.setState({email})
    }

    handleChange(event){
        //console.log(event.target.name)
        switch(event.target.name){
            case 'firstName':
                this.setFirstName(event.target.value)
            break
            case 'lastName':
                this.setLastName(event.target.value)
            break
            case 'email':
                this.setEmail(event.target.value)
            break
            default:
                console.log('erro')
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state.firstName)
        console.log(this.state.lastName)
        console.log(this.state.email)
    }

    render(){
        return (
            <div>
                <h1>Formulário 01</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='firstName'>Nome: </label>
                        <input 
                            id = 'firstName'
                            name = 'firstName'
                            type = 'text'
                            value = {this.state.firstName}
                            onChange = {this.handleChange}
                            className = 'form-control'
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='lastName'>Sobrenome: </label>
                        <input 
                            id = 'lastName'
                            name = 'lastName'
                            type = 'text'
                            value = {this.state.lastName}
                            onChange = {this.handleChange}
                            className = 'form-control'
                        />

                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>E-mail: </label>
                        <input 
                            id = 'email'
                            name = 'email'
                            type = 'email'
                            value = {this.state.email}
                            onChange = {this.handleChange}
                            className = 'form-control'
                        />

                    </div>
                    <div>
                        <button type='submit' className='btn btn-primary'>Submeter</button>
                    </div>
                </form>
            </div>
        )
    }
}