import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spin from './Spin'
import InfiniteScroll from 'react-infinite-scroll-component'

export default class Spo extends Component {
    articles=[
        {
        "source": {
       "id": "cbs news",
       "name": "CBS News"
       },
       "author": "Aimee Picchi, Megan Cerullo",
       "title": "Hurricane Beryl snarls travel in U.S. as airlines cancel hundreds of flights   CBS News",
       "description": "Airlines are suspending or canceling flights into Houston as Hurricane Beryl makes landfall in Texas.",
       "url": "https://www.cbsnews.com/news/hurricane beryl houston texas travel flights airlines/",
       "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/07/03/2a289943 ae33 4e5c 951e 106a9be1fff3/thumbnail/1200x630/ee7f479f6ef9fcbe6a7db725def1e196/gettyimages 1232937149.jpg?v=2287029998c5246c93d6dd038eb30603",
       "publishedAt": "2024 07 08T20:32:37Z",
       "content": "Hundreds of flights have been canceled Monday as airlines grapple with the impact of Hurricane Beryl making landfall in Texas. \r\nAnother roughly 3,500 flights were delayed, although not all delays ar… [+2894 chars]"
       }]
       constructor(props){
        super(props)
        this.state={
            articles: this.articles,
            loading: false,
            page:1,
            total:0
        }
    }

    async componentDidMount(props){
      let url=`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=3dfdb9102b154deab66608dfeb6457b9&page=sports&pageSize=5`
      let data= await fetch(url)
      let pars= await data.json()
      this.setState({articles:pars.articles,total:pars.totalResults})
    }

    fetchMoreData=async ()=>{
      this.setState({page:this.state.page+1})
      // this.setState({total:this.state.total-5})
      let url=`https://newsapi.org/v2/top-headlines?country=in&category=sport&apiKey=3dfdb9102b154deab66608dfeb6457b9&&page=${this.state.page}pageSize=5`
      this.setState({loading:true})
      // this.setState({page:this.state.page+1})
      let data= await fetch(url)
      let pars= await data.json()
      this.setState({articles:this.state.articles.concat(pars.articles),total:pars.totalResults})
      this.setState({loading:false})

    }
    


    render() {
      return (
        <>
      
          <h1>Top headlines</h1>
          {/* {this.state.loading && <Spin/>} */}
          
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length<=this.state.total}
            loader={<Spin/>}
          >
              <div className='container'>
          <div className="row">
          {this.state.articles.map((ele)=>{
                return  <div className="col-md-4">
                   
                     <Newsitem a={ele.title} b={ele.description} c={ele.url} f={ele.urlToImage} e={ele.publishedAt} d={ele.author}/>
                  
                      </div>
        })
        }
           </div>
           </div>
           </InfiniteScroll>
           
           
           </>
      )
    }
  }
  