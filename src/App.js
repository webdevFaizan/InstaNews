import './App.css';
import NavBar from './Components/NavBar';

import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";
import React, { Component } from 'react'
import News from './Components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          {/* <h1>Hi there this is my first class based react app</h1> */}
          <News articlesOnOnePage={20}/>
        </Router>
      </div>
    )
  }
}
