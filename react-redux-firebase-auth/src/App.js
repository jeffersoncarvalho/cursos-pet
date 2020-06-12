import React, {Component} from 'react'

import {Router,Link,Switch,Route} from 'react-router-dom'

import Main from './components/Main'
import Signin from './components/Signin'
import Signup from './components/Signup'
import ContentA from './components/ContentA'
import ContentB from './components/ContentB'

export default class App extends Component{
    render(){
        return (
            <Router>
              <div className='container'>
                <nav className='navbar navbar-expand-lg navbar-light bg-light'>

                </nav>
              </div>
            </Router>
        )
    }
}