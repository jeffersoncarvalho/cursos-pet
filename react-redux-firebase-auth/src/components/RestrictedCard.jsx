import React, { Component } from 'react'
import Card from './Card'

import { connect } from 'react-redux'
import { signout } from '../store/actions/authActionCreator'

class RestrictedCard extends Component {
    
    componentDidMount() {
        if (this.props.auth.isLoaded && this.props.auth.isEmpty) {
            this.props.history.push('/signin')
        }

        if (!this.props.verified) {
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
            <Card title={this.props.title}>
                {this.props.children}
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
        authMsg: state.authReducer.authMsg,
        verified: state.authReducer.verified
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
)(RestrictedCard);