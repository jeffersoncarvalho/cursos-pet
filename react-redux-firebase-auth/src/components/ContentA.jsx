import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signout } from '../store/actions/authActionCreator'
import Card from './Card'

class Content extends Component {

    componentDidMount() {
        if (this.props.auth.isLoaded && this.props.auth.isEmpty) {
            this.props.history.push('/signin')
        }
    }

    logout() {
        this.props.signout(
            () => {
                this.props.history.push('/signin')
            }
        )
    }

    render() {
        return (
            <Card title='Conteúdo do Site'>
                Conteúdo apenas para usuários A<br /><br />
                <button className='btn btn-danger' onClick={() => this.logout()}>
                    Logout
                </button>
            </Card>
        )
    }
}



function mapStateToProps(state) {
    return {
        auth: state.firebaseReducer.auth,
        authMsg: state.authReducer.authMsg
    };
}

function mapDispatchToProps(dispatch) {
    return {
        signout(callback) {
            const action = signout(callback)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Content);