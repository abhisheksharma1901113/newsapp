import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      totalResult: 0,
      articles: [],
      page: 1,
      size: 18,
    }
  }
  async getData() {
    let response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&pageSize=${this.state.size}&sortBy=publishedAt&language=${this.props.language}&apiKey=2c3b496fb15f465388854d5bb7086d65`)
    response = await response.json()
    console.log(response)
    if (response.articles) {
      this.setState({
        totalResult: response.totalResults,
        articles: response.articles.filter((x) => x.title !== "[Removed]")
      })
    }
  }
  fetchData=async()=>{
    this.setState({page:this.state.page+1})
    let response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&page=${this.state.page}$&pageSize=${this.state.size}&sortBy=publishedAt&language=${this.props.language}&apiKey=2c3b496fb15f465388854d5bb7086d65`)
    response = await response.json()
    if (response.articles) {
      this.setState({
        totalResult: response.totalResults,
        articles: this.state.articles.concat(response.articles.filter((x) => x.title !== "[Removed]"))
      })
    }


  }
  componentDidMount() {
    this.getData()
  }
  componentDidUpdate(oldProps) {
    if (oldProps !== this.props) {
      this.getData()
    }
  }
  render() {
    return (
      <>
        <div className="containter-fluid"> 
          <h4 className='text-center backgound text-light mt-1'>{this.props.q}</h4>
        </div>
        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchData}
          hasMore={this.state.articles < this.state.totalResult}
          loader={<h4>Loading...</h4>}

        >


          <div className="row">
            {
              this.state.articles.map((item, index) => {
                return <NewsItem key={index}
                  source={item.source.name}
                  title={item.title}
                  description={item.description}
                  date={item.publishedAt}
                  pic={item.urlToImage}
                  url={item.url}


                />
              })
            }
          </div>
        </InfiniteScroll>

      </>
    )
  }
  
}
