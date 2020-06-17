import React, {Component} from 'react'
import Card from './commons/RestrictCard'

import { connect } from 'react-redux'
import { signout } from '../store/actions/authActionCreator'

class ContentA extends Component{

    logout(){
        this.props.mySignout(
            ()=>{
                this.props.history.push('/signin')
            }
        )
    }

    render(){
        return (
            <Card title='Conteúdo A' history={this.props.history}>
                Conteúdo apenas para usuários. <br /><br />
                <button className='btn btn-danger'
                    onClick={()=>this.logout()}
                >
                    Fazer Logout
                </button>
            </Card>
        )
    }
}

function mapStateToProps(state) {
    return {
        userMsg: state.authReducer.authMsg,
        firebaseAuth: state.firebaseReducer.auth
    }
}

function mapDispatchToProps(dispatch){
    return{
        mySignout(callback) {
            const action =  signout(callback)
            dispatch(action)  
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ContentA)