import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Loading from './Loading'

export default class News extends Component {


  // static propTypes = {
  //   prop: PropTypes
  // }


    constructor(props){    
    super(props);     
    
    this.state = {      //In the function based component we used the setState react hook in order to change the state variable, here the state variable is not being changed by hook, but we will change the state using this.state.
      loading : true,   
      articles : [],
      pageNo: 1,
      totalResults : 0,
      maximumPages : 0
    }
  }

  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=c2e7fbf6be224c7aa4df54f1f5c7d635&pageSize=${this.state.articlesOnOnePage}&page=${this.state.pageNo}`;
    // let url = "https://google.co.in";
    let data = await fetch(url);
    let jsonData= await data.json();
    let maximumPages=Math.ceil((jsonData.totalResults)/this.props.articlesOnOnePage)+1;
    
    this.setState({
      articles : jsonData.articles,
      totalResults : jsonData.totalResults,
      maximumPages : maximumPages,
      loading : false
    });
  }

   onPreviousClick = async ()=>{
    console.log('prev');

    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=c2e7fbf6be224c7aa4df54f1f5c7d635&pageSize=${this.state.articlesOnOnePage}&page=${this.state.pageNo-1}`;
    // let url = "https://google.co.in";
    let data = await fetch(url);
    let jsonData= await data.json();
    this.setState({
      articles : jsonData.articles,
      loading : false,
      pageNo : this.state.pageNo-1
    });
  }

  onNextClick = async ()=>{
    console.log('next');
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=c2e7fbf6be224c7aa4df54f1f5c7d635&pageSize=${this.state.articlesOnOnePage}&page=${this.state.pageNo+1}`;
    // let url = "https://google.co.in";
    let data = await fetch(url);
    let jsonData= await data.json();
    this.setState({
      articles : jsonData.articles,
      loading : false,
      pageNo : this.state.pageNo+1
    });
  }


  render() {
    return (
      <div className='container' style={{display : 'flex',flexDirection: 'column',justifyContent: 'space-around', border: '', alignItems: 'center'}}>
        <h1>Insta News - Top Headlines from all around the world.</h1>
        <div className="newsItemContainer" style={{display : 'flex', flexWrap: 'wrap', justifyContent: 'space-around', border: ''}}>
          {this.state.loading && <Loading />}
          {!this.state.loading && this.state.articles.map((element)=>{
            
            return <div className="newsCard" key={element.url}>
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />              
            </div>
          })}
        </div>
          {!this.state.loading &&           
              <div className='container my-3 mx-3' style={{display : 'flex', justifyContent : 'space-between'}}>
              <button disabled={this.state.pageNo<=1} type="button" className="btn btn-dark" onClick={this.onPreviousClick}>Previous</button>
              <button disabled={this.state.pageNo+1>=this.state.maximumPages} type="button" className="btn btn-dark" onClick={this.onNextClick}>Next</button>
            </div>
          }
      </div>
    )
  }
}
