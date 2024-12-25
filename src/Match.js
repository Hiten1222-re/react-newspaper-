import React, { Component, useEffect,useState } from 'react'
import Newsitem from './Newsitem'
import Spin from './Spin'
import InfiniteScroll from 'react-infinite-scroll-component'

const Match=(props)=> {
  let a=document.getElementById("i1").value
  const [article,setarticle]=useState([])
  const [loading,setloading]=useState(false)
  const [page,setpage]=useState(1)
  const [total,settotal]=useState(0)
      
  const first= async()=>{
    props.setprogress(30)
    let url=`https://newsapi.org/v2/everything?q=${a}&apiKey=3dfdb9102b154deab66608dfeb6457b9&page=${page}&pageSize=5`
    let data= await fetch(url)
    let pars= await data.json()
    console.log("running")
    setarticle(pars.articles)
    settotal(pars.totalResults)
    props.setprogress(100)

  }
    useEffect(()=>{
      first()
    },[])

    

    //   abc=async (props)=>{
      
    //     let url=`https://newsapi.org/v2/everything?q=${this.a}&apiKey=3dfdb9102b154deab66608dfeb6457b9&page=${this.state.page + 1}&pageSize=5`
    //     this.setState({loading:true})
    //     let data= await fetch(url)
    //     let pars= await data.json()
    //     this.setState({article:pars.articles,page:this.state.page + 1})
    //     this.setState({loading:false})
    //     this.setState({total:this.state.total-5})
        
    //   }
      
    //   abb=async (props)=>{
    //     let url=`https://newsapi.org/v2/everything?q=${this.a}&apiKey=3dfdb9102b154deab66608dfeb6457b9&page=${this.state.page - 1}&pageSize=5`
    //     this.setState({loading:true})
        
    //     let data= await fetch(url)
    //     let pars= await data.json()
    //     this.setState({article:pars.articles,page:this.state.page - 1})
    //     this.setState({loading:false})
    //     this.setState({total:this.state.total+5})

    // }

    const fetchMoreData=async ()=>{
      // setpage(page+1)
      let url=`https://newsapi.org/v2/everything?q=${a}&apiKey=3dfdb9102b154deab66608dfeb6457b9&page=${page+1}&pageSize=5`
      setloading(true)
      setpage(page+1)
      let data= await fetch(url)
      let pars= await data.json()
      setarticle(article.concat(pars.articles))
      settotal(pars.totalResults)
      setloading(false)

    }


      return (
        <>
      
          <h1>Top headlines</h1>
          {/* {this.state.loading && <Spin/>} */}
          
          <InfiniteScroll
            dataLength={article.length}
            next={fetchMoreData}
            hasMore={article.length<=total}
            loader={<Spin/>}
          >
              <div className='container'>
          <div className="row">
          {article.map((ele)=>{
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
  

  export default Match
  