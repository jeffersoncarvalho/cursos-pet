import React, { Component } from 'react'


import Card from './RestrictedCard'

export default class Content extends Component {
    render() {
        return (
            <Card title='Conteúdo do Site' history={this.props.history}>
                Conteúdo apenas para usuários A<br /><br />
            </Card>
        )
    }
}



