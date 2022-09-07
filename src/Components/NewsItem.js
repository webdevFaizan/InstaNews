import React from 'react'
// import PropTypes from 'prop-types'
import newsImg from '../news.webp'
// Any file outside the src folder is not supported, so we have to move this static file to the src folder.

export default class NewsItem extends React.Component {
  // static propTypes = {
  //   prop: PropTypes
  // }
    

  render() {
    let {title, description, imageUrl, newsUrl}= this.props;
    
    
    return (
      <div>
        <div className="card my-3 mx-3" style={{width: "20rem"}}>
        <img className="card-img-top" src={!imageUrl?newsImg: imageUrl} alt="..."/>
          <div className="card-body ">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More...</a>
            
          </div>
        </div>      
      </div>
    )
  }
}



