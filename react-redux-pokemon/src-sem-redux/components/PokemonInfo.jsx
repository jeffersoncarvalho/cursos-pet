import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'

export default class PokemonInfo extends Component {

    constructor(props){
        super(props)
        this.state = {name:'',height:'',order:'',weight:''}
    }

    componentDidMount(){
        this.loadPokemon()
    }

    componentDidUpdate(propsAnterior){
        if(propsAnterior.id !== this.props.id)
            this.loadPokemon()
    }

    loadPokemon(){
        const url = `https://pokeapi.co/api/v2/pokemon/${this.props.id}`
        axios.get(url)
        .then(
            (res)=>{
                this.setState({
                    name: res.data.name,
                    height: res.data.height,
                    order: res.data.order,
                    weight: res.data.weight
                })
            }
        )
        .catch(error=>console.log(error))
    }

    render() {
        return (
            <Card title='Informações do Pokémon' dark>
                <strong style={{textTransform:'capitalize'}}>
                    {this.state.name}
                </strong>
                <br /> Altura: {this.state.height}
                <br /> Peso: {this.state.weight}
                <br /> Ordem: {this.state.order}
            </Card>
        )
    }
}