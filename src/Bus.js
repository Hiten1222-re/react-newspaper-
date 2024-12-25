import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spin from './Spin'

export default class Bus extends Component {
    article=[
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
            article: this.article,
            loading: false,
            page:1,
            total:0
        }
    }

    async componentDidMount(props){
      let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3dfdb9102b154deab66608dfeb6457b9&page=business&pageSize=5`
      let data= await fetch(url)
      let pars= await data.json()
      this.setState({article:pars.articles,total:pars.totalResults-5})
    }
    
    abc=async (props)=>{
      
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3dfdb9102b154deab66608dfeb6457b9&page=${this.state.page + 1}&pageSize=5`
        this.setState({loading:true})
        let data= await fetch(url)
        let pars= await data.json()
        this.setState({article:pars.articles,page:this.state.page + 1})
        this.setState({loading:false})
        this.setState({total:this.state.total-5})
        
      }
      
      abb=async (props)=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3dfdb9102b154deab66608dfeb6457b9&page=${this.state.page - 1}&pageSize=5`
        this.setState({loading:true})
        
        let data= await fetch(url)
        let pars= await data.json()
        this.setState({article:pars.articles,page:this.state.page - 1})
        this.setState({loading:false})
        this.setState({total:this.state.total+5})

    }

  render() {
    return (
      <div className='container'>
        <h1>Top headlines</h1>
        {this.state.loading && <Spin/>}
        <div className="row">
        {this.state.article.map((ele)=>{
                return  <div className="col-md-4">
                   
                    <Newsitem a={ele.title} b={ele.description} c={ele.url} f={ele.urlToImage}/>
                      </div>
                
        })
        }
         </div>
         <div className="d-flex justify-content-between">
         <button type="button" disabled={this.state.page===1?true:false} class="btn btn-dark" onClick={this.abb}>Previous</button>
         <button type="button" disabled={this.state.total>0?false:true} class="btn btn-dark" onClick={this.abc}>Next</button>
         </div>
       </div>
      
    )
  }
}
