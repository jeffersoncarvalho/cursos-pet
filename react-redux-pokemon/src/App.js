import React, { Component } from 'react'
import './App.css'

import {
    conexaoNavigate as Navigate,
    conexaoPokemonFront as PokemonFront,
    conexaoPokemonBack as PokemonBack,
    conexaoPokemonInfo as PokemonInfo} from './components'

export default class App extends Component {

  render() {
    return (
      <div className='container'>
        <h1>Minicurso React-Redux</h1>
        <div className='line'>
          <Navigate/>
        </div>
        <div className='line'>
          <PokemonFront/>
          <PokemonBack/>
          <PokemonInfo/>
        </div>
      </div>
    )
  }
}