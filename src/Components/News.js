import React, {useState, useEffect} from 'react'
// import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Loading from './Loading'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


const  News = (props)=>{    
  
  let [loading, setLoading] = useState(true);
  let [articles, setArticles] = useState([]);
  let [pageNo, setPageNo] = useState(1);
  let [totalArticles, setTotalArticles] = useState(0);
  // let [maximumPages, setMaximumPages] = useState(0);
  
  
  //   constructor(props){    
  //   super(props);         
  //   this.state = {      //In the function based component we used the setState react hook in order to change the state variable, here the state variable is not being changed by hook, but we will change the state using  
  //     loading : true,   
  //     articles : [],
  //     pageNo: 1,
  //     totalArticles : 0,
  //     maximumPages : 0
  //   }
  // }

  

  useEffect(()=>{
    const updateNews=async()=>{
      setLoading(true);
      props.loadingBarChange(0);
      // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.articlesOnOnePage}&page=${ pageNo}`;
      let url=`https://gnews.io/api/v4/top-headlines?&token=${props.apiKey}&country=${props.country}&topic=${props.topic}&lang=${props.lang}&page=${ pageNo+1}`;
      console.log(url);
      props.loadingBarChange(10);
      // let url = "https://google.co.in";
      let data = await fetch(url);
      props.loadingBarChange(50);
      let jsonData= await data.json();
      props.loadingBarChange(70);
      // console.log(jsonData);
      // let maximumPages=Math.ceil((jsonData.totalArticles)/10)+1;
      
      setArticles(jsonData.articles);
      setTotalArticles(jsonData.totalArticles);
      // setMaximumPages(maximumPages);
      setLoading(false);
      setPageNo(pageNo+1);
      
      props.loadingBarChange(100);    
    }
    updateNews();
  },[]);

  //  onPreviousClick = async ()=>{
  //    this.setState({loading : true})
  //   console.log('prev');

  //   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.articlesOnOnePage}&page=${ pageNo}`;
  //   // let url = "https://google.co.in";
  //   let data = await fetch(url);
  //   let jsonData= await data.json();
  //   // console.log(jsonData);
  //   this.setState({
  //     articles : jsonData.articles,
  //     loading : false,
  //     pageNo :  pageNo-1
  //   });
  // }

  // onNextClick = async ()=>{
  //   this.setState({loading : true})
  //   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.articlesOnOnePage}&page=${ pageNo}`;
  //   // let url = "https://google.co.in";
  //   let data = await fetch(url);
  //   let jsonData= await data.json();
  //   // console.log(jsonData);
  //   this.setState({
  //     articles : jsonData.articles,
  //     loading : false,
  //     pageNo :  pageNo+1
  //   });
  // }


  const fetchData=async () =>{    
      setLoading(true);
      // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.articlesOnOnePage}&page=${ pageNo+1}`;
      let url=`https://gnews.io/api/v4/top-headlines?&token=${props.apiKey}&country=${props.country}&topic=${props.topic}&lang=${props.lang}&page=${ pageNo+1}`;
      
      // let url = "https://google.co.in";
      let data = await fetch(url);
      let jsonData= await data.json();
      // console.log(jsonData);    
      setArticles(articles.concat(jsonData.articles));
      setLoading(false);
      setPageNo(pageNo+1);
      // this.setState({
      //   articles :  articles.concat(jsonData.articles),
      //   loading : false,
      //   pageNo :  pageNo+1
      // });
    
  }
  
    return (
      <div className='container' style={{display : 'flex',flexDirection: 'column',justifyContent: 'space-around', border: '', alignItems: 'center'}}>
        <div style={{minHeight : 100}}></div>
        <h1>{`Insta News - Top Headlines for ${props.topic}`}</h1>
        <InfiniteScroll
        dataLength={articles.length}
        next={fetchData}
        hasMore={ articles.length <  totalArticles}
        loader={<Loading/>}        
        >
        <div className="newsItemContainer" style={{display : 'flex', flexWrap: 'wrap', justifyContent: 'space-around', border: ''}}>
          { loading && <Loading />}
          { articles.map((element)=>{
            
            return <div className="newsCard" key={element.url}>
              <NewsItem title={element.title} description={element.description} imageUrl={element.image} newsUrl={element.url} publishedAt={element.publishedAt}  newsSource = {element.source.name}/>              
            </div>
          })}
        </div>          
        </InfiniteScroll>
      </div>
    )
}


// These defaultProps is for class based component, but we have to convert it to function based components.
// static defaultProps = {
//   country : 'in',
//   category : 'entertainment'
// }

// static propTypes = {    //This is not the compulsory object, this is compulsory only if we want to add some default value of proptypes or if we want to add the types specific to that particular propTypes. If we do not use this object even then we will have no problem. Since this is not compulsory.
//   country: PropTypes.string,
//   // country: PropTypes.element.isRequired,
//   category: PropTypes.string
// }


News.defaultProps = {
  country : 'in',
  category : 'entertainment'
}

News.propTypes = {    //This is not the compulsory object, this is compulsory only if we want to add some default value of proptypes or if we want to add the types specific to that particular propTypes. If we do not use this object even then we will have no problem. Since this is not compulsory.
  country: PropTypes.string,
  // country: PropTypes.element.isRequired,
  category: PropTypes.string
}

export default News;