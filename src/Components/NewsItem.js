import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NewsItem extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {

    let {title, description}= this.props;

    return (
      <div>
        <div className="card my-3 mx-3" style={{width: "20rem"}}>
        <img className="card-img-top" src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/O2Q3D5RNV4I63PGGBB2LE2XCSY.jpg&w=1440" alt="..."/>
          <div className="card-body ">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>      
      </div>
    )
  }
}
