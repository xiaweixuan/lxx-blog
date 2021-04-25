import React, { Component } from 'react'
import {HashRouter as Router,Route} from 'react-router-dom';
import Slider from './components/slider'
import Import from './components/import'
export default class App extends Component {
  render(){
    return(
      <Router>
        <Route path='/' component={Slider} exact />
        <Route path='/import' component={Import}/>
      </Router>
    )
  }
  
}
