import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

export default class News extends Component {


  // static propTypes = {
  //   prop: PropTypes
  // }


  articles=[
      {
      "source": {
      "id": "independent",
      "name": "Independent"
      },
      "author": "Maroosha Muzaffar",
      "title": "Saskatchewan stabbings - live: Suspect Damien Sanderson found dead while brother remains at large - The Independent",
      "description": "Damien and Myles Sanderson were both charged by Canadian authorities with counts of first-degree murder, attempted murder and break and enter",
      "url": "https://www.independent.co.uk/news/world/americas/canada-stabbing-suspects-saskatchewan-justin-trudeau-b2160527.html",
      "urlToImage": "https://static.independent.co.uk/2022/09/05/00/AP22247812328842.jpg?quality=75&width=1200&auto=webp",
      "publishedAt": "2022-09-06T10:05:19Z",
      "content": "Tributes pour in for victims killed: I will forever cherish your sweet demeanor and caring ways\r\nICYMI: Lana Head was identified by her former partner in an interview with APTN News to have died as a… [+1973 chars]"
      },
      {
      "source": {
      "id": "cnn",
      "name": "CNN"
      },
      "author": "Tierney Sneed, Jeremy Herb and Marshall Cohen, CNN",
      "title": "Takeaways from the ruling granting Trump's request for a special master in Mar-a-Lago probe - CNN",
      "description": "A federal judge threw a wrench Monday in the Justice Department investigation into potential mishandling of documents from former President Donald Trump's White House by granting his request for a special master to review evidence seized from his Florida home…",
      "url": "https://www.cnn.com/2022/09/05/politics/takeaways-trump-cannon-mar-a-lago-special-master/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220813101305-mar-a-lago-2021-file-super-tease.jpg",
      "publishedAt": "2022-09-06T09:51:00Z",
      "content": null
      },
      {
      "source": {
      "id": "cnn",
      "name": "CNN"
      },
      "author": "Hadas Gold and Abeer Salman, CNN",
      "title": "Israeli military admits Shireen Abu Akleh likely killed by Israeli fire​​​​, but won't charge soldiers - CNN",
      "description": "The Israel Defense Forces have ​admitted for the first time that there is a \"high possibility\" Palestinian-American Al Jazeera journalist Shireen Abu Akleh was shot and killed by Israeli fire while covering an Israeli military operation in May.",
      "url": "https://www.cnn.com/2022/09/05/middleeast/idf-shireen-abu-akleh-investigation-intl/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220511032125-shireen-abu-akleh-fb-unlimited-super-tease.jpg",
      "publishedAt": "2022-09-06T09:08:00Z",
      "content": "Jerusalem (CNN)The Israel Defense Forces have admitted for the first time that there is a \"high possibility\" Palestinian-American Al Jazeera journalist Shireen Abu Akleh was shot and killed by Israel… [+8437 chars]"
      },
      {
      "source": {
      "id": "reuters",
      "name": "Reuters"
      },
      "author": null,
      "title": "Taiwan offers condolences over China quake, ready to send rescuers - Reuters",
      "description": "Taiwan's government expressed its condolences to China on Tuesday for an earthquake in Sichuan province and said it was ready to send rescuers, in a sign of goodwill to Beijing despite weeks of military tensions.",
      "url": "https://www.reuters.com/world/asia-pacific/taiwan-president-expresses-condolences-china-sichuan-earthquake-2022-09-06/",
      "urlToImage": "https://www.reuters.com/resizer/kiWjuJOSmO_tyrFFvzJA8HHOwFE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/3F3OLGTKMFMDLNN5IISHZBQ4IA.jpg",
      "publishedAt": "2022-09-06T08:46:00Z",
      "content": "TAIPEI, Sept 6 (Reuters) - Taiwan's government expressed its condolences to China on Tuesday for an earthquake in Sichuan province and said it was ready to send rescuers, in a sign of goodwill to Bei… [+1628 chars]"
      }
    ]

  constructor(props){    //Constructor function could be used to create a the state variable of this object. This means if we want to change the state of this NewsComponent then this variable could be defined inside the constructor function.
    super(props);     //If we want to use the props inside the base constructor, then we will have to take it as a parameter from this constructor.
    
    this.state = {      //In the function based component we used the setState react hook in order to change the state variable, here the state variable is not being changed by hook, but we will change the state using this.state.
      loading : false,   //When the page will be fetching the json from the API then this state variable will be helpful, it will track when the loading is false and load the loading animation for that time being.
      articles : this.articles
    }
  }

  render() {
    return (
      <div className='container' style={{display : 'flex',flexDirection: 'column',justifyContent: 'space-around', border: '', alignItems: 'center'}}>
        <h1>Insta News - Top Headlines from all around the world.</h1>
        <div className="newsItemContainer" style={{display : 'flex', flexWrap: 'wrap', justifyContent: 'space-around', border: ''}}>
          {/* All the new articles will be fetched using the fetch API and will be saved in the variable 'articles' and then the map method will allow them to iterate over each element of the map articles and we will send everyting using props, and those cards will be displayed. */}
          {this.articles.map((element)=>{
            // Here the return is required since the 
            return <div className="newsCard" key={element.url}>
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
      </div>
    )
  }
}
