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
  // cards = 6;
  apiKey= '599c4ed196acc97c9c3da0f7cba7eccf';
  // apiKey= '62897480329c586505954b611b7ff361';
  country='in';
  lang='en';
  // apiKey='b074e697def6492188c5345e46a6715f';

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          {/* <h1>Hi there this is my first class based react app</h1> */}
          <Routes>
          {/* // <News articlesOnOnePage={20}/> */}
          
            <Route exact path='/' element={<News key='home' apiKey={this.apiKey}   country={this.country} lang={this.lang}  topic='breaking-news'/>}/>
            <Route exact path='/world' element={<News key='world' apiKey={this.apiKey}   country={this.country} lang={this.lang} topic='world'/>}/>
            <Route exact path='/breaking-news' element={<News key='breaking-news' apiKey={this.apiKey}   country={this.country} lang={this.lang} topic='breaking-news'/>}/>
            <Route exact path='/nation' element={<News key='nation' apiKey={this.apiKey}   country={this.country} lang={this.lang} topic='nation'/>}/>
            <Route exact path='/business' element={<News key='business' apiKey={this.apiKey}   country={this.country} lang={this.lang} topic='business'/>}/>
            <Route exact path='/technology' element={<News key='technology' apiKey={this.apiKey}   country={this.country} lang={this.lang} topic='technology'/>}/>
            <Route exact path='/entertainment' element={<News key='entertainment' apiKey={this.apiKey}   country={this.country} lang={this.lang} topic='entertainment'/>}/>
            <Route exact path='/sports' element={<News key='sports' apiKey={this.apiKey}   country={this.country} lang={this.lang} topic='sports'/>}/>
            {/* <Route exact path='/science ' element={<News key='science ' apiKey={this.apiKey}   country={this.country} lang={this.lang} topic='science'/>}/> */}
            <Route exact path='/health' element={<News key='health' apiKey={this.apiKey}   country={this.country} lang={this.lang} topic='health'/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}
