import React, {Component} from 'react'
import Card from './commons/Card'

import { connect } from 'react-redux'
import { signin } from '../store/actions/authActionCreator'


class Signin extends Component{

    constructor(props){
        super(props)
        this.state = {login:'',password:'',loading:false}
        this.setLogin = this.setLogin.bind(this)
        this.setPassword = this.setPassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    setLogin(e){
        this.setState({login:e.target.value})
    }

    setPassword(e){
        this.setState({password:e.target.value})
    }

    renderButton() {
        if (this.state.loading) {
            return (
                <button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Carregando...
                </button>
            )
        }

        return (
            <input type='submit' value='Efetuar Login' className='btn btn-primary' />
        )
    }

    renderMessage() {
        if (this.props.userMsg) {
            const msgType = (this.props.userMsg.includes('Err') ? 'alert-danger' : 'alert-info')
            return (
                <div className={`alert ${msgType}`} style={{ marginTop: '10px' }}>
                    {this.props.userMsg}
                </div>
            )
        }
        return
    }


    onSubmit(e){
        e.preventDefault()
        this.setState({loading:true})
        
        this.props.mySignin(this.state.login,this.state.password, ()=>{
            this.setState({loading:false})
        })

        this.setState({login:'',password:''})
    }

    render(){
        return (
            <Card title='Fazer Login'>
                <form onSubmit={this.onSubmit}> 
                    <div className='form-group'>
                        <label>Login: </label>
                        <input type='text' className='form-control' 
                        value={this.state.login} onChange={this.setLogin} />
                    </div>
                    <div className='form-group'>
                        <label>Password: </label>
                        <input type='password' className='form-control' 
                        value={this.state.password} onChange={this.setPassword} />
                    </div>
                    {this.renderButton()}
                </form>
                {this.renderMessage()}
            </Card>
        )
    }
}

function mapStateToProps(state) {
    return {
        userMsg: state.authReducer.authMsg
    }
}

function mapDispatchToProps(dispatch){
    return{
        mySignin(login,password,callback) {
            const action =  signin(login,password,callback)
            dispatch(action)  
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Signin)