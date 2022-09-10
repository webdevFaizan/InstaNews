import React, { Component } from 'react'
// import spinner from '../spinner.gif'

export default class Loading extends Component {
  render() {
    return (
      <div className='container my-3 mx-3' style={{display : 'flex', justifyContent : 'center'}}>
        <img src='./images/spinner.gif' alt="..." />
      </div>
    )
  }
}
