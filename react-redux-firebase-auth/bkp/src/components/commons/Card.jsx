import React, { Component } from 'react'
import { resetAuthMessage } from '../../store/actions/authActionCreator'
import { connect } from 'react-redux'

class Card extends Component {

    componentDidMount() {
        this.props.myResetAuthMessage()
    }

    render() {
        return (
            <div className='content'>
                <div className='card'>
                    <div className='card-header'>
                        {this.props.title}
                    </div>
                    <div className='card-body'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        myResetAuthMessage() {
            const action = resetAuthMessage()
            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToProps)(Card)