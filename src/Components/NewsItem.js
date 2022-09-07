import React from 'react'
// import PropTypes from 'prop-types'
import newsImg from '../news.webp'
// Any file outside the src folder is not supported, so we have to move this static file to the src folder.

export default class NewsItem extends React.Component {
  // static propTypes = {
  //   prop: PropTypes
  // }
    

  render() {
    let {title, description, imageUrl, newsUrl,publishedAt, newsSource}= this.props;


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
        <img className="card-img-top" src={!imageUrl?newsImg: imageUrl} alt="..."/>
          <div className="card-body" style={{position : 'relative'}}>
          <span className="position-absolute translate-middle badge rounded bg-primary" style={{ top : '-4%', fontSize : 18, zIndex: 1}}>{newsSource}
                    </span>   
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text" style={{marginBottom: 0, color : 'darkgrey'}}>{dateDisplay()}</p>
                  <p className="card-text" style={{color : 'darkgrey'}}>{timeDisplay()}</p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More...</a>
                  {/* SLIGHTLY IMPORTANT : Usually in react we use Link and to for our work, but the main purpose of Link and to is to add append the current address with the given one so that we could go to the final address. And in case of href one will have absolute address that will be useful in the case of any external links, so in this case a and href will be more suitable*/}
          </div>
        </div>      
      </div>
    )
  }
}



