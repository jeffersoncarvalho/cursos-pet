import React, { Component } from 'react'
import './App.css'

import Navigate from './components/Navigate'
import PokemonFront from './components/PokemonFront'
import PokemonBack from './components/PokemonBack'
import PokemonInfo from './components/PokemonInfo'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {id:2}
    this.setId = this.setId.bind(this)
  }

  setId(novoId){
    this.setState({id:novoId})
  }

  render() {
    return (
      <div className='container'>
        <h1>Minicurso React-Redux</h1>
        <div className='line'>
          <Navigate id={this.state.id} setId={this.setId}/>
        </div>
        <div className='line'>
          <PokemonFront id={this.state.id}/>
          <PokemonBack id={this.state.id}/>
          <PokemonInfo id={this.state.id}/>
        </div>
      </div>
    )
  }
}