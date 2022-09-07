import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Loading from './Loading'
import PropTypes from 'prop-types'


export default class News extends Component {

    static defaultProps = {
      country : 'in',
      category : 'entertainment'
    }

    static propTypes = {    //This is not the compulsory object, this is compulsory only if we want to add some default value of proptypes or if we want to add the types specific to that particular propTypes. If we do not use this object even then we will have no problem. Since this is not compulsory.
      country: PropTypes.string,
      // country: PropTypes.element.isRequired,
      category: PropTypes.string
    }


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
    this.setState({loading : true});
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.articlesOnOnePage}&page=${this.state.pageNo}`;
    // let url = "https://google.co.in";
    let data = await fetch(url);
    let jsonData= await data.json();
    console.log(jsonData);
    let maximumPages=Math.ceil((jsonData.totalResults)/this.props.articlesOnOnePage)+1;
    
    this.setState({
      articles : jsonData.articles,
      totalResults : jsonData.totalResults,
      maximumPages : maximumPages,
      loading : false
    });
  }

   onPreviousClick = async ()=>{
     this.setState({loading : true})
    console.log('prev');

    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.articlesOnOnePage}&page=${this.state.pageNo}`;
    // let url = "https://google.co.in";
    let data = await fetch(url);
    let jsonData= await data.json();
    console.log(jsonData);
    this.setState({
      articles : jsonData.articles,
      loading : false,
      pageNo : this.state.pageNo-1
    });
  }

  onNextClick = async ()=>{
    this.setState({loading : true})
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.articlesOnOnePage}&page=${this.state.pageNo}`;
    // let url = "https://google.co.in";
    let data = await fetch(url);
    let jsonData= await data.json();
    console.log(jsonData);
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
              <button disabled={this.state.pageNo+1<this.state.maximumPages?false: true} type="button" className="btn btn-dark" onClick={this.onNextClick}>Next</button>
            </div>
          }
      </div>
    )
  }
}
