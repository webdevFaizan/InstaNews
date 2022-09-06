import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

export default class News extends Component {


  // static propTypes = {
  //   prop: PropTypes
  // }


    constructor(props){    //Constructor function could be used to create a the state variable of this object. This means if we want to change the state of this NewsComponent then this variable could be defined inside the constructor function.
    super(props);     //If we want to use the props inside the base constructor, then we will have to take it as a parameter from this constructor.
    
    this.state = {      //In the function based component we used the setState react hook in order to change the state variable, here the state variable is not being changed by hook, but we will change the state using this.state.
      loading : false,   //When the page will be fetching the json from the API then this state variable will be helpful, it will track when the loading is false and load the loading animation for that time being.
      articles : []
    }
  }

  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=c2e7fbf6be224c7aa4df54f1f5c7d635";
    let data = await fetch(url);
    let jsonData= await data.json();
    this.setState({articles : jsonData.articles});
  }



  render() {
    return (
      <div className='container' style={{display : 'flex',flexDirection: 'column',justifyContent: 'space-around', border: '', alignItems: 'center'}}>
        <h1>Insta News - Top Headlines from all around the world.</h1>
        <div className="newsItemContainer" style={{display : 'flex', flexWrap: 'wrap', justifyContent: 'space-around', border: ''}}>
          {/* All the new articles will be fetched using the fetch API and will be saved in the variable 'articles' and then the map method will allow them to iterate over each element of the map articles and we will send everyting using props, and those cards will be displayed. */}
          {this.state.articles.map((element)=>{
            //Here the return statement is required since the arrow function have to return something to the div. So that it could be rendered. So basically in here after population of the json, there will be multiple divs of newsItem which will ultimately passed on to the App.js and then it will be displayed.
            return <div className="newsCard" key={element.url}>{/* The key element is something that will help the browser uniquely identify the div that is being created, and in the json url is the unique element.  */}
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
              {/* The main use of using the NewsItem as a component here is that we will not require to repeat the codes over and over again, instead we could send all the customised props to the 'NewsItem' component and this will be displayed in the cards.  */}
            </div>
          })}
        </div>
      </div>
    )
  }
}
