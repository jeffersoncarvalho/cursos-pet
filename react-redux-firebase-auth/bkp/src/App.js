import React, { Component } from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

import Main from './components/Main'
import Signin from './components/Signin'
import Signup from './components/Signup'
import ContentA from './components/ContentA'
import ContentB from './components/ContentB'

import { connect } from 'react-redux'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link to={'/'} className='navbar-brand'>PET Firebase Auth</Link>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav mr-auto'>
                <li>
                  <Link to={'/'} className='nav-link'>Home</Link>
                </li>
                <li>
                  <Link to={'/signin'} className='nav-link'>Login</Link>
                </li>
                <li>
                  <Link to={'/signup'} className='nav-link'>Cadastrar</Link>
                </li>
                <li>
                  <Link to={'/contentA'} className='nav-link'>Conteúdo A</Link>
                </li>
                <li>
                  <Link to={'/contentB'} className='nav-link'>Conteúdo B</Link>
                </li>
              </ul>
              {this.props.user}
            </div>  
          </nav>
          <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/signin' component={Signin}/>
            <Route path='/signup' component={Signup}/>
            <Route path='/contentA' component={ContentA}/>
            <Route path='/contentB' component={ContentB}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

function mapStateToProps(state){
  return{
    user: state.authReducer.user
  }
}

export default connect(mapStateToProps)(App)
