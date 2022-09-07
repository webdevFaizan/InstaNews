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
  cards = 20;
  // apiKey= 'c2e7fbf6be224c7aa4df54f1f5c7d635';
  apiKey='b074e697def6492188c5345e46a6715f';

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          {/* <h1>Hi there this is my first class based react app</h1> */}
          <Routes>
            <Route exact path='/' element={<News key='home' apiKey={this.apiKey} articlesOnOnePage={this.cards} country="in" category='entertainment'/>}/>
          {/* // <News articlesOnOnePage={20}/> */}
          </Routes>
        </Router>
      </div>
    )
  }
}
