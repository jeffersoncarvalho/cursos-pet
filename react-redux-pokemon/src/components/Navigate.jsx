import React, { Component } from 'react'
import Card from './Card'
import './Navigate.css'

import { connect } from 'react-redux'
import { alterarId } from '../store/actions/pokemonId'

class Navigate extends Component {

    proximo(){
        const id = ( this.props.id + 1 > 500) ? this.props.id : this.props.id + 1
        this.props.alterarPokemonId(id)
    }

    anterior(){
        const id = ( this.props.id - 1 < 1) ? this.props.id : this.props.id - 1
        this.props.alterarPokemonId(id)

    }

    somar10(){
        const id = ( this.props.id + 10 > 500) ? 500 : this.props.id + 10
        this.props.alterarPokemonId(id)
    }

    subtrair10(){
        const id = ( this.props.id - 10 < 1) ? 1 : this.props.id - 10
        this.props.alterarPokemonId(id)
    }

    render() {
        return (
            <Card title={`ID do Pokémon ${this.props.pokemon}`} red>
                <div className='navigate'>
                    <button className='btn btn-secondary' onClick={()=>this.subtrair10()}>
                        -10
                    </button>
                    <button className='btn btn-secondary' onClick={()=>this.anterior()}>
                        Anterior
                    </button>
                    <button className='btn btn-secondary' onClick={()=>this.proximo()}>
                        Próximo
                    </button>
                    <button className='btn btn-secondary' onClick={()=>this.somar10()}>
                        +10
                    </button>
                    <input value={this.props.id} readOnly/>
                </div>
            </Card>
        )
    }
}

function mapStateToProps(state) {
    return {
        id: state.pokemonId.id
    }
}

function mapActionCreatorToProps(dispatch){
    return {
        alterarPokemonId(novoId){
            const action = alterarId(novoId)
            dispatch(action)
        }//alteriarPokemonId
    }//return
}//function

const conexaoNavigate = connect(mapStateToProps,mapActionCreatorToProps)(Navigate)
export {conexaoNavigate}