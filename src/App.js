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
          {/* // <News articlesOnOnePage={20}/> */}
          
            <Route exact path='/' element={<News key='home' apiKey={this.apiKey} articlesOnOnePage={this.cards} country="in" category='general'/>}/>
            <Route exact path='/technology' element={<News key='technology' apiKey={this.apiKey} articlesOnOnePage={this.cards} country="in" category='technology'/>}/>
            <Route exact path='/general' element={<News key='general' apiKey={this.apiKey} articlesOnOnePage={this.cards} country="in" category='general'/>}/>
            <Route exact path='/business' element={<News key='business' apiKey={this.apiKey} articlesOnOnePage={this.cards} country="in" category='business'/>}/>
            <Route exact path='/entertainment' element={<News key='entertainment' apiKey={this.apiKey} articlesOnOnePage={this.cards} country="in" category='entertainment'/>}/>
            <Route exact path='/health' element={<News key='health' apiKey={this.apiKey} articlesOnOnePage={this.cards} country="in" category='health'/>}/>
            <Route exact path='/science' element={<News key='science' apiKey={this.apiKey} articlesOnOnePage={this.cards} country="in" category='science'/>}/>
            <Route exact path='/sports' element={<News key='sports' apiKey={this.apiKey} articlesOnOnePage={this.cards} country="in" category='sports'/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}
