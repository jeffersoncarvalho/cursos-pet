import React, { Component } from 'react'

export default class Card extends Component {
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