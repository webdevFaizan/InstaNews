import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

export default class News extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className='container' style={{display : 'flex',flexDirection: 'column',justifyContent: 'space-around', border: '', alignItems: 'center'}}>
        <h1>Insta News - Top Headlines from all around the world.</h1>
        <div className="newsItemContainer" style={{display : 'flex', flexWrap: 'wrap', justifyContent: 'space-around', border: ''}}>
          <NewsItem title="myTitle" description="myDescription"/>
          <NewsItem title="myTitle" description="myDescription"/>
          <NewsItem title="myTitle" description="myDescription"/>
          <NewsItem title="myTitle" description="myDescription"/>
          <NewsItem title="myTitle" description="myDescription"/>
          <NewsItem title="myTitle" description="myDescription"/>
        </div>
      </div>
    )
  }
}
