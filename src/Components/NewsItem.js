import React from 'react'
// import PropTypes from 'prop-types'

export default class NewsItem extends React.Component {
  // static propTypes = {
  //   prop: PropTypes
  // }
    

  render() {
    let {title, description, imageUrl, newsUrl}= this.props;     //This is the style of class and function based components both, here we could destructure the props into our own variable. This will help us use the variables without the use of this.props... If this was not the case, then we would have to use this.props.title in place of title in all the places. Also in the function based components we had to take the props in the form of function arguments.   
    //In this class based component, we do not need to catch the props in any function parameter, in function based component this was being done in the NewsItem function itself.
    
    return (
      <div>
        <div className="card my-3 mx-3" style={{width: "20rem"}}>
        <img className="card-img-top" src={imageUrl} alt="..."/>
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



