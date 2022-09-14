import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default class NavBar extends Component {
  // static propTypes = {    
  //   //Navbar is not receiving any propTypes, this is why this empty, also this object could be added to this class as a property. By delcaring NavBar.propTypes={<object>}
  //   // prop: PropTypes
  // }

  //ComponentDidMount() method is also not required because we do not have any state variables to manage in this file.


  render() {         //This render method is a kind of life cycle method, and there will be other methods running before the actual rendering of the html page takes place, and the main purpose of render method is to render the html.
    return (
      <div style={{position : 'fixed', width : '100%', zIndex : '2'}}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Insta News</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item"><Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/technology">Technology<span className="sr-only">(current)</span></Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/business">Business<span className="sr-only">(current)</span></Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment<span className="sr-only">(current)</span></Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/breaking-news">General<span className="sr-only">(current)</span></Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/health">Health<span className="sr-only">(current)</span></Link></li>
                  {/* <li className="nav-item"><Link className="nav-link" to="/science">Science<span className="sr-only">(current)</span></Link></li> */}
                  <li className="nav-item"><Link className="nav-link" to="/sports">Sports<span className="sr-only">(current)</span></Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/nation">Nation News<span className="sr-only">(current)</span></Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/world">World News<span className="sr-only">(current)</span></Link></li>
                </ul>
                <form className="form-inline my-2 my-lg-0" style={{display : 'none'}}>
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
      </div>
    )
  }
}
