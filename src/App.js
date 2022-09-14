

// FIRST GO TO THE READMEFIRST.TXT FILE, I HAVE ADDED SOME IMPORTANT POINTS.


import './App.css';
import NavBar from './Components/NavBar';
import LoadingBar from 'react-top-loading-bar';


import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";
import React, {useState } from 'react'
import News from './Components/News';

const App=()=> {
  // cards = 6;
  // apiKey= '599c4ed196acc97c9c3da0f7cba7eccf';
  // apiKey= '62897480329c586505954b611b7ff361';
  let apiKey= process.env.REACT_APP_API_KEY;
  let country='in';
  let lang='en';
  // apiKey='b074e697def6492188c5345e46a6715f';

  let [progress, setProgress]=useState(0);
  let [color, setColor] = useState('red');

  // constructor(){
  //   super();
  //     state = {
  //     progress : 0,
  //     color : 'red'
  //   }
  // }

  const loadingBarChange=(p)=>{
    //   setState({
    //   progress : p
    // })
    setProgress(p);
  }

  const afterLoadComplete=()=>{
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    let color = `rgb(${r},${g},${b})`;
    //   setState({
    //   color : color
    // })
    setColor(color);
  }

  
    return (
      <div>
        <Router>          
          <NavBar />
          <LoadingBar
            color={ color}
            progress={ progress}
            shadow = 'false'
            height={3}
            waitingTime ={1000}
            onLoaderFinished={() => {
                  afterLoadComplete();
              }              
            }
          />
          {/* <h1>Hi there this is my first class based react app</h1> */}
          <Routes>
          {/* // <News articlesOnOnePage={20}/> */}
          
            <Route exact path='/' element={<News key='home' loadingBarChange={  loadingBarChange} apiKey={  apiKey}   country={  country} lang={  lang}  topic='breaking-news'/>}/>
            <Route exact path='/world' element={<News key='world' loadingBarChange={  loadingBarChange} apiKey={  apiKey}   country={  country} lang={  lang} topic='world'/>}/>
            <Route exact path='/breaking-news' element={<News key='breaking-news' loadingBarChange={  loadingBarChange} apiKey={  apiKey}   country={  country} lang={  lang} topic='breaking-news'/>}/>
            <Route exact path='/nation' element={<News key='nation' loadingBarChange={  loadingBarChange} apiKey={  apiKey}   country={  country} lang={  lang} topic='nation'/>}/>
            <Route exact path='/business' element={<News key='business' loadingBarChange={  loadingBarChange} apiKey={  apiKey}   country={  country} lang={  lang} topic='business'/>}/>
            <Route exact path='/technology' element={<News key='technology' loadingBarChange={  loadingBarChange} apiKey={  apiKey}   country={  country} lang={  lang} topic='technology'/>}/>
            <Route exact path='/entertainment' element={<News key='entertainment' loadingBarChange={  loadingBarChange} apiKey={  apiKey}   country={  country} lang={  lang} topic='entertainment'/>}/>
            <Route exact path='/sports' element={<News key='sports' loadingBarChange={  loadingBarChange} apiKey={  apiKey}   country={  country} lang={  lang} topic='sports'/>}/>
            {/* <Route exact path='/science ' element={<News key='science ' apiKey={  apiKey}   country={  country} lang={  lang} topic='science'/>}/> */}
            <Route exact path='/health' element={<News key='health' loadingBarChange={  loadingBarChange} apiKey={  apiKey}   country={  country} lang={  lang} topic='health'/>}/>
          </Routes>
          
        </Router>
      </div>
    )
  }


export default App;