import React, {Component} from 'react'
import Card from './Card'

import { connect } from 'react-redux'

class RestrictedCard extends Component{

    componentDidMount(){
        if(this.props.firebaseAuth.isLoaded && this.props.firebaseAuth.isEmpty){
            this.props.history.push('/signin')
        }
    }

    render(){
        return (
            <Card title={this.props.title}>
                {this.props.children}
            </Card>
        )
    }
}

function mapStateToProps(state) {
    return {
        firebaseAuth: state.firebaseReducer.auth
    }
}

export default connect(mapStateToProps)(RestrictedCard)