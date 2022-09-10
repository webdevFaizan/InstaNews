import React from 'react'
// import PropTypes from 'prop-types'
// import newsImg from '../news.webp'
// const newsImg = require('../news.webp');    //PENDING TASK : This line consists of a local file, but when we deploy this code on netlify, then this local file will be a problem, but I have researched the stack overflow, the import newsImg is not going to work here, instead the require statement may work this is why we are using the require statement.

// Any file outside the src folder is not supported, so we have to move this static file to the src folder.

// Random comment for a commit.

export default class NewsItem extends React.Component {
  // static propTypes = {
  //   prop: PropTypes
  // }
    

  render() {
    let {title, description, imageUrl, newsUrl,publishedAt, newsSource}= this.props;
    // imageUrl= null;

    function dateDisplay(){
      let s = publishedAt.slice(0,publishedAt.length-1).split("T");
      let str = "Published On : "+ s[0];
      return str;
    }

    function timeDisplay(){
      let s = publishedAt.slice(0,publishedAt.length-1).split("T");
      // "Published On :  "+ 
      let str = "Time : "+ s[1];
      return str;
    }
    
    
    return (
      <div>
        <div className="card my-3 mx-3" style={{width: "20rem"}}>
        {/* <img className="card-img-top" src={ !imageUrl?require('../news.webp').default : imageUrl} alt="..."/> */}
        <img className="card-img-top" src={!imageUrl?'./images/news.webp' : imageUrl} alt="..."/>
        {/* IMPORTANT : We are statically adding the image from our server to the front end, this could only possible because the image is kept on a public folder, image is kept in the images folder of public, if imageUrl is null, as I have manually commented it once, the default image is being shown. So if the image from the url is broken then this static image will be shown. I could not use requre('./news.webp') here since image was not loading with that, I have read somewhere that using require('./news.webp').default will work just fine.*/}
          <div className="card-body" style={{position : 'relative'}}>
          <span className="position-absolute translate-middle badge rounded bg-primary" style={{ top : '-4%', fontSize : 18, zIndex: 1}}>{newsSource}
                    </span>   
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text" style={{marginBottom: 0, color : 'darkgrey'}}>{dateDisplay()}</p>
                  <p className="card-text" style={{color : 'darkgrey'}}>{timeDisplay()}</p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More...</a>
                  
          </div>
        </div>      
      </div>
    )
  }
}



