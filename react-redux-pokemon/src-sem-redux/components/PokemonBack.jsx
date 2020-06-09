import React, { Component } from 'react'
import Card from './Card'

export default class PokemonBack extends Component {
    render() {
        const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${this.props.id}.png`
        return (
            <Card title='Costas' green>
                <img src={url} alt={this.props.id}/>
            </Card>
        )
    }
}